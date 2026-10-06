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