'use client';

import { useState } from 'react';
import InlineLinks from '@/components/InlineLinks';

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  className?: string;
}

export default function FaqAccordion({
  items,
  title,
  eyebrow,
  className = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`mx-auto w-full max-w-3xl py-12 ${className}`}>
      {eyebrow && (
        <p className="eyebrow mb-3 text-center text-xs tracking-widest text-gold-antique uppercase">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="mb-8 text-center font-display text-3xl sm:text-4xl text-forest-deep">
          {title}
        </h2>
      )}
      <div className="divide-y divide-border-light/60 border-y border-border-light/60">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.id ?? idx} className="py-4">
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between text-left font-display text-xl sm:text-2xl text-forest-deep transition-colors hover:text-gold-antique focus:outline-none"
              >
                <span className="pr-4">{item.question}</span>
                <span className="font-body text-xl font-light text-gold-antique transition-transform duration-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="mt-3 pr-6 font-body text-sm sm:text-base leading-relaxed text-text-soft">
                  <p>
                    <InlineLinks text={item.answer} />
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}