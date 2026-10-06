export interface ComplaintArticlePattern {
  name: string;
  chineseName?: string;
  description: string;
}

export interface ComplaintArticleFaq {
  question: string;
  answer: string;
}

export interface ComplaintArticle {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  recognition: {
    title: string;
    paragraphs: string[];
  };
  tcmPerspective: {
    eyebrow: string;
    title: string;
    intro: string;
    patterns: ComplaintArticlePattern[];
  };
  treatment: {
    title: string;
    intro: string;
    steps: string[];
    safetyNote: string;
  };
  faqs: ComplaintArticleFaq[];
  cta: {
    title: string;
    text: string;
    buttonText: string;
  };
}

import { RUGPIJN_NL, RUGPIJN_EN } from './rugpijn';
import { NEKKLACHTEN_NL, NEKKLACHTEN_EN } from './nekklachten';
import { SCHOUDERKLACHTEN_NL, SCHOUDERKLACHTEN_EN } from './schouderklachten';

export * from './rugpijn';
export * from './nekklachten';
export * from './schouderklachten';

export const COMPLAINT_ARTICLES_NL: Record<string, ComplaintArticle> = {
  rugpijn: RUGPIJN_NL,
  nekklachten: NEKKLACHTEN_NL,
  'nek-schouderklachten': NEKKLACHTEN_NL,
  schouderklachten: SCHOUDERKLACHTEN_NL,
};

export const COMPLAINT_ARTICLES_EN: Record<string, ComplaintArticle> = {
  rugpijn: RUGPIJN_EN,
  nekklachten: NEKKLACHTEN_EN,
  'nek-schouderklachten': NEKKLACHTEN_EN,
  schouderklachten: SCHOUDERKLACHTEN_EN,
};

export function getComplaintArticle(slug: string, locale: string = 'nl'): ComplaintArticle | undefined {
  const dataset = locale === 'en' ? COMPLAINT_ARTICLES_EN : COMPLAINT_ARTICLES_NL;
  return dataset[slug] || COMPLAINT_ARTICLES_NL[slug];
}