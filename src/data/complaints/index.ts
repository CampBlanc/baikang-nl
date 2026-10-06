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
import { HOOFDPIJN_NL, HOOFDPIJN_EN } from './hoofdpijn';
import { MIGRAINE_NL, MIGRAINE_EN } from './migraine';
import { SPIER_GEWRICHTSKLACHTEN_NL, SPIER_GEWRICHTSKLACHTEN_EN } from './spier-gewrichtsklachten';
import { FROZEN_SHOULDER_NL, FROZEN_SHOULDER_EN } from './frozenshoulder';
import { KNIEKLACHTEN_NL, KNIEKLACHTEN_EN } from './knieklachten';
import { ARTROSE_NL, ARTROSE_EN } from './artrose';
import { TENNISARM_NL, TENNISARM_EN } from './tennisarm';

export * from './rugpijn';
export * from './nekklachten';
export * from './schouderklachten';
export * from './hoofdpijn';
export * from './migraine';
export * from './spier-gewrichtsklachten';
export * from './frozenshoulder';
export * from './knieklachten';
export * from './artrose';
export * from './tennisarm';

export const COMPLAINT_ARTICLES_NL: Record<string, ComplaintArticle> = {
  rugpijn: RUGPIJN_NL,
  nekklachten: NEKKLACHTEN_NL,
  'nek-schouderklachten': NEKKLACHTEN_NL,
  schouderklachten: SCHOUDERKLACHTEN_NL,
  hoofdpijn: HOOFDPIJN_NL,
  migraine: MIGRAINE_NL,
  'spier-gewrichtsklachten': SPIER_GEWRICHTSKLACHTEN_NL,
  'frozen-shoulder': FROZEN_SHOULDER_NL,
  knieklachten: KNIEKLACHTEN_NL,
  artrose: ARTROSE_NL,
  tennisarm: TENNISARM_NL,
};

export const COMPLAINT_ARTICLES_EN: Record<string, ComplaintArticle> = {
  rugpijn: RUGPIJN_EN,
  nekklachten: NEKKLACHTEN_EN,
  'nek-schouderklachten': NEKKLACHTEN_EN,
  schouderklachten: SCHOUDERKLACHTEN_EN,
  hoofdpijn: HOOFDPIJN_EN,
  migraine: MIGRAINE_EN,
  'spier-gewrichtsklachten': SPIER_GEWRICHTSKLACHTEN_EN,
  'frozen-shoulder': FROZEN_SHOULDER_EN,
  knieklachten: KNIEKLACHTEN_EN,
  artrose: ARTROSE_EN,
  tennisarm: TENNISARM_EN,
};

export function getComplaintArticle(slug: string, locale: string = 'nl'): ComplaintArticle | undefined {
  const dataset = locale === 'en' ? COMPLAINT_ARTICLES_EN : COMPLAINT_ARTICLES_NL;
  return dataset[slug] || COMPLAINT_ARTICLES_NL[slug];
}