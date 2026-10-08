'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { useShowAfterScroll } from '@/components/useShowAfterScroll';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const [isOpen, setIsOpen] = useState(false);
  // Op mobiel pas tonen na de hero, zodat de hero-knoppen vrij blijven
  const showLauncher = useShowAfterScroll();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Laad bestaande gespreksgeschiedenis voor de huidige taal uit de sessie
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(`baikang_chat_${locale}`);
      if (saved) {
        setMessages(JSON.parse(saved));
      }
    } catch (err) {
      console.error('Fout bij inladen chatgeschiedenis:', err);
    }
  }, [locale]);

  // Bewaar gespreksgeschiedenis automatisch bij updates
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(`baikang_chat_${locale}`, JSON.stringify(messages));
      } catch (err) {
        console.error('Fout bij opslaan chatgeschiedenis:', err);
      }
    }
  }, [messages, locale]);

  // Scroll automatisch mee naar het nieuwste bericht
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus automatisch op het invoerveld na openen op desktop
      if (typeof window !== 'undefined' && window.innerWidth > 640) {
        inputRef.current?.focus();
      }
    }
  }, [isOpen, messages, scrollToBottom]);

  // Sluit het venster met de Escape-toets
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Dim de zwevende knop subtiel tijdens snel scrollen
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Interne paginalinks en ankers netjes afhandelen en venster inklappen
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, targetUrl: string) => {
    e.preventDefault();
    setIsOpen(false);

    const hashIndex = targetUrl.indexOf('#');
    if (hashIndex !== -1) {
      const hash = targetUrl.substring(hashIndex + 1);
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${hash}`);
        window.dispatchEvent(new Event('hashchange'));
        return;
      }
    }
    window.location.href = targetUrl;
  };

  // Render markdown links als veilige HTML-links
  const renderMessageContent = (content: string) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      const label = match[1];
      const url = match[2];
      const isExternal = url.startsWith('http://') || url.startsWith('https://');

      parts.push(
        <a
          key={match.index}
          href={url}
          onClick={(e) => {
            if (!isExternal) handleInternalLink(e, url);
          }}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="font-semibold text-gold-dark hover:text-forest underline underline-offset-2 break-words transition-colors"
        >
          {label}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return parts.length > 0 ? parts : content;
  };

  const sendMessage = async (textToSend: string) => {
    const cleanInput = textToSend.trim();
    if (!cleanInput || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: cleanInput,
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          messages: updatedHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      // Veilige foutafhandeling zonder unhandled throw (voorkomt rode crash-overlay)
      if (!response.ok || !response.body) {
        const errPayload = await response.json().catch(() => null);
        console.error('Chat API Error:', response.status, errPayload);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: isEn
              ? 'Could not connect to the consultation assistant. Please try again or feel free to contact Patrick directly.'
              : 'Er ging even iets mis bij het ophalen van het antwoord. Probeer het gerust opnieuw of neem rechtstreeks contact op met de praktijk.',
          },
        ]);
        return;
      }

      const assistantId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        streamedResponse += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId ? { ...msg, content: streamedResponse } : msg
          )
        );
      }
    } catch (error) {
      console.error('Verbindingsfout chat:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: isEn
            ? 'Network error. Please check your internet connection and try again.'
            : 'Er is een netwerkfout opgetreden. Controleer je internetverbinding en probeer het opnieuw.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const clearChat = () => {
    setMessages([]);
    try {
      sessionStorage.removeItem(`baikang_chat_${locale}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 font-sans print:hidden">
      {/* Zwevende triggerknop (問) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label={isEn ? 'Ask a question about acupuncture' : 'Vragen over acupunctuur & intake'}
          className={`group bg-forest-deep text-ivory hover:bg-forest-dark border border-gold-antique/50 shadow-xl rounded-full h-12 w-12 justify-center sm:h-auto sm:w-auto sm:px-5 sm:py-3.5 flex items-center gap-3 transition-all duration-300 active:scale-95 ${
            !showLauncher
              ? 'max-sm:pointer-events-none max-sm:translate-y-4 max-sm:opacity-0'
              : isScrolling
                ? 'opacity-40 hover:opacity-100'
                : 'opacity-100'
          }`}
        >
          <span className="font-serif text-xl sm:text-lg text-gold-antique group-hover:scale-110 transition-transform">
            問
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-wide">
            {isEn ? 'Questions & Intake' : 'Vragen & Anamnese'}
          </span>
        </button>
      )}

      {/* Geopend chatvenster */}
      {isOpen && (
        <div className="bg-ivory border border-forest-deep/20 rounded-2xl shadow-2xl w-[calc(100vw-2.5rem)] sm:w-[420px] h-[550px] max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-forest-deep text-ivory p-4 flex justify-between items-center border-b border-gold-antique/30">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-xl text-gold-antique">問</span>
              <div>
                <p className="font-serif text-base tracking-wide text-ivory font-medium">
                  {isEn ? 'Bái Kāng Guide' : 'Bái Kāng TCM Gids'}
                </p>
                <p className="text-[11px] text-stone-300">
                  {isEn ? 'Acupuncture & Clinic assistance' : 'Rustige toelichting & behandeladvies'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={clearChat}
                  title={isEn ? 'Clear conversation' : 'Gesprek wissen'}
                  className="text-stone-300 hover:text-white text-xs px-2 py-1 rounded transition-colors"
                >
                  {isEn ? 'Reset' : 'Wissen'}
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-white text-lg p-1 px-2 transition-colors"
                aria-label={isEn ? 'Close' : 'Sluiten'}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Berichtengebied */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-stone-50/70 text-sm">
            {messages.length === 0 && (
              <div className="space-y-4 pt-1">
                <div className="bg-white border border-stone-200/90 p-3.5 rounded-xl shadow-xs text-stone-700 leading-relaxed text-xs sm:text-sm">
                  {isEn ? (
                    <p>
                      Welcome to Bai Kang TCM. I can help explore your symptoms, explain how Traditional Chinese Medicine views your complaint, or provide clarity on treatment fees and appointments.
                    </p>
                  ) : (
                    <p>
                      Welkom bij Bai Kang TCM. Ik help je graag met vragen over je klachten, de Traditionele Chinese Geneeskunde (TCM), behandelvormen of praktische praktijkinformatie.
                    </p>
                  )}
                </div>

                {/* Directe themasuggesties */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider px-1">
                    {isEn ? 'Suggested topics' : 'Direct verkennen'}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      sendMessage(
                        isEn
                          ? 'I have pain and fatigue. How does TCM view this?'
                          : 'Ik heb last van pijn en vermoeidheid. Hoe kijkt TCM hiernaar?'
                      )
                    }
                    className="w-full text-left text-xs bg-white hover:bg-gold-antique/10 border border-stone-200 hover:border-gold-antique/50 p-2.5 rounded-lg text-stone-800 transition-colors shadow-2xs"
                  >
                    🌱 {isEn ? 'Explore symptoms & balance' : 'Mijn klachten & energie verkennen'}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      sendMessage(
                        isEn
                          ? 'How does the first intake and acupuncture treatment work?'
                          : 'Hoe verloopt een eerste intake en acupunctuurbehandeling?'
                      )
                    }
                    className="w-full text-left text-xs bg-white hover:bg-gold-antique/10 border border-stone-200 hover:border-gold-antique/50 p-2.5 rounded-lg text-stone-800 transition-colors shadow-2xs"
                  >
                    📋 {isEn ? 'What to expect at the initial intake?' : 'Wat kan ik verwachten bij de intake?'}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      sendMessage(
                        isEn
                          ? 'What are the treatment fees and insurance reimbursements?'
                          : 'Wat zijn de tarieven en worden behandelingen vergoed?'
                      )
                    }
                    className="w-full text-left text-xs bg-white hover:bg-gold-antique/10 border border-stone-200 hover:border-gold-antique/50 p-2.5 rounded-lg text-stone-800 transition-colors shadow-2xs"
                  >
                    💳 {isEn ? 'Rates & health insurance coverage' : 'Tarieven & vergoedingen'}
                  </button>
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-3.5 rounded-xl leading-relaxed text-xs sm:text-sm ${
                  m.role === 'user'
                    ? 'bg-forest-deep text-ivory ml-auto max-w-[85%] shadow-xs'
                    : 'bg-white border border-stone-200/90 text-stone-800 mr-auto max-w-[92%] shadow-xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{renderMessageContent(m.content)}</div>
              </div>
            ))}

            {isLoading && (
              <div className="text-xs text-stone-400 italic flex items-center gap-1.5 pl-1">
                <span>{isEn ? 'Thinking...' : 'Moment geduld...'}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Invoerformulier */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-stone-200 flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isEn ? 'Ask a question or describe symptoms...' : 'Stel een vraag of noem je klachten...'}
              className="flex-1 bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-forest-deep text-stone-800"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-forest-deep hover:bg-forest-dark disabled:opacity-40 text-ivory px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            >
              {isEn ? 'Send' : 'Verstuur'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}