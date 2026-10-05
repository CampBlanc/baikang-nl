import { METHODE_FAQS } from './methode';
import { TARIEVEN_FAQS } from './tarieven';
import { KLACHTEN_FAQS } from './klachten';
import { ACUPUNCTUUR_FAQS } from './acupunctuur';
import { GENERAL_FAQS } from './general';
import { BilingualFaqEntry, FaqCategory, FaqItem, FaqLocale } from './types';

export * from './types';
export * from './methode';
export * from './tarieven';
export * from './klachten';
export * from './acupunctuur';
export * from './general';

/**
 * Volledige tweetalige database van alle FAQ items
 */
export const ALL_BILINGUAL_FAQS: BilingualFaqEntry[] = [
  ...METHODE_FAQS,
  ...TARIEVEN_FAQS,
  ...KLACHTEN_FAQS,
  ...ACUPUNCTUUR_FAQS,
  ...GENERAL_FAQS,
];

/**
 * Haalt alle FAQ items op vertaald naar de gewenste locale ('nl' of 'en')
 */
export function getAllFaqs(locale: FaqLocale = 'nl'): FaqItem[] {
  const activeLocale = locale === 'en' ? 'en' : 'nl';
  return ALL_BILINGUAL_FAQS.map((entry) => ({
    id: entry.id,
    category: entry.category,
    question: entry.question[activeLocale],
    answer: entry.answer[activeLocale],
  }));
}

/**
 * Haalt FAQ-items op gefilterd per categorie en vertaald naar de actieve locale
 */
export function getFaqsByCategory(
  category: FaqCategory,
  locale: FaqLocale = 'nl'
): FaqItem[] {
  return getAllFaqs(locale).filter((item) => item.category === category);
}

/**
 * Formatteert de FAQ context als tekstblok voor de Virtual TCM Assistant prompt (Fase 2)
 */
export function getFaqContextForPrompt(locale: FaqLocale = 'nl'): string {
  const isEn = locale === 'en';
  return getAllFaqs(locale)
    .map(
      (faq) =>
        `[${isEn ? 'Question' : 'Vraag'}]: ${faq.question}\n[${isEn ? 'Answer' : 'Antwoord'}]: ${faq.answer}`
    )
    .join('\n\n');
}