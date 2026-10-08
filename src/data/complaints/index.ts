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


/* =======================================================================
   IMPORTS
   ======================================================================= */

import { RUGPIJN_NL, RUGPIJN_EN } from './rugpijn';
import { NEKKLACHTEN_NL, NEKKLACHTEN_EN } from './nekklachten';
import {
  SCHOUDERKLACHTEN_NL,
  SCHOUDERKLACHTEN_EN,
} from './schouderklachten';
import { HOOFDPIJN_NL, HOOFDPIJN_EN } from './hoofdpijn';
import { MIGRAINE_NL, MIGRAINE_EN } from './migraine';
import {
  SPIER_GEWRICHTSKLACHTEN_NL,
  SPIER_GEWRICHTSKLACHTEN_EN,
} from './spier-gewrichtsklachten';
import {
  FROZEN_SHOULDER_NL,
  FROZEN_SHOULDER_EN,
} from './frozenshoulder';
import { KNIEKLACHTEN_NL, KNIEKLACHTEN_EN } from './knieklachten';
import { ARTROSE_NL, ARTROSE_EN } from './artrose';
import { TENNISARM_NL, TENNISARM_EN } from './tennisarm';
import { RSI_CARPAL_NL, RSI_CARPAL_EN } from './rsi-carpaletunnelsyndroom';
import { PEES_SPORT_NL, PEES_SPORT_EN } from './peesklachten-sportblessures';
import { STRESS_NL, STRESS_EN } from './stress';
import {
  SLAAPPROBLEMEN_NL,
  SLAAPPROBLEMEN_EN,
} from './slaapproblemen';
import { BURNOUT_NL, BURNOUT_EN } from './burnout';
import { ONRUST_NL, ONRUST_EN } from './onrust';
import { ANGST_NL, ANGST_EN } from './angst';
import { VERMOEIDHEID_NL, VERMOEIDHEID_EN } from './vermoeidheid';
import { LONG_COVID_NL, LONG_COVID_EN } from './long-covid';
import { FIBROMYALGIE_NL, FIBROMYALGIE_EN } from './fibromyalgie';
import { ISCHIAS_NL, ISCHIAS_EN } from './ischias';
import { HOOIKOORTS_NL, HOOIKOORTS_EN } from './hooikoorts';
import { SOMBERHEID_NL, SOMBERHEID_EN } from './somberheid';


/* =======================================================================
   EXPORTS
   ======================================================================= */

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
export * from './rsi-carpaletunnelsyndroom';
export * from './peesklachten-sportblessures';
export * from './stress';
export * from './slaapproblemen';
export * from './burnout';
export * from './onrust';
export * from './angst';
export * from './vermoeidheid';
export * from './long-covid';
export * from './fibromyalgie';
export * from './ischias';
export * from './hooikoorts';
export * from './somberheid';


/* =======================================================================
   NEDERLANDS
   ======================================================================= */

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

  'rsi': RSI_CARPAL_NL,

  'peesklachten': PEES_SPORT_NL,

  stress: STRESS_NL,

  slaapproblemen: SLAAPPROBLEMEN_NL,

  'burn-out': BURNOUT_NL,

  onrust: ONRUST_NL,

  angst: ANGST_NL,

  vermoeidheid: VERMOEIDHEID_NL,

  'long-covid': LONG_COVID_NL,

  fibromyalgie: FIBROMYALGIE_NL,

  ischias: ISCHIAS_NL,

  hooikoorts: HOOIKOORTS_NL,

  somberheid: SOMBERHEID_NL,
};


/* =======================================================================
   ENGLISH
   ======================================================================= */

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

  'rsi': RSI_CARPAL_EN,

  'peesklachten': PEES_SPORT_EN,

  stress: STRESS_EN,

  slaapproblemen: SLAAPPROBLEMEN_EN,

  'burn-out': BURNOUT_EN,

  onrust: ONRUST_EN,

  angst: ANGST_EN,

  vermoeidheid: VERMOEIDHEID_EN,

  'long-covid': LONG_COVID_EN,

  fibromyalgie: FIBROMYALGIE_EN,

  ischias: ISCHIAS_EN,

  hooikoorts: HOOIKOORTS_EN,

  somberheid: SOMBERHEID_EN,
};


/* =======================================================================
   GET ARTICLE
   ======================================================================= */

export function getComplaintArticle(
  slug: string,
  locale: string = 'nl'
): ComplaintArticle | undefined {
  const dataset =
    locale === 'en'
      ? COMPLAINT_ARTICLES_EN
      : COMPLAINT_ARTICLES_NL;

  return dataset[slug] || COMPLAINT_ARTICLES_NL[slug];
}