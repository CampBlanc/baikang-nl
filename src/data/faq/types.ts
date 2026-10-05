export type FaqLocale = 'nl' | 'en';

export type FaqCategory =
  | 'methode'
  | 'tarieven'
  | 'klachten'
  | 'acupunctuur'
  | 'algemeen';

export interface BilingualFaqEntry {
  id: string;
  category: FaqCategory;
  question: {
    nl: string;
    en: string;
  };
  answer: {
    nl: string;
    en: string;
  };
}

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}