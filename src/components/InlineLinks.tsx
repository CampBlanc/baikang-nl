import { Fragment } from 'react';
import { Link } from '@/i18n/navigation';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const linkClass =
  'font-medium text-gold-dark underline underline-offset-2 hover:text-forest-deep transition-colors';

/**
 * Zet links in de vorm [tekst](url) om naar klikbare links.
 * Externe links (http/https) openen in een nieuw tabblad,
 * interne links (beginnend met /) gaan via de i18n-Link.
 * Tekst zonder links wordt ongewijzigd weergegeven.
 */
export default function InlineLinks({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    if (href.startsWith('/')) {
      parts.push(
        <Link key={start} href={href} className={linkClass}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={start}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {label}
        </a>
      );
    }

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <Fragment>{parts}</Fragment>;
}
