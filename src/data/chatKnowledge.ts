/* =======================================================================
   KENNISBANK VOOR DE VIRTUELE ASSISTENT
   Bron: dezelfde data als de website (klachtpagina's, behandelvormen, tarieven).
   Pas je een pagina aan, dan weet de assistent het automatisch.
   ======================================================================= */

import { getComplaintCategories, getDedicatedSlugs, type ComplaintItem } from '@/data/complaintsData';
import { getComplaintArticle } from '@/data/complaintArticles';
import { getTreatment, TREATMENT_SLUGS } from '@/data/treatments';
import { getRates, DEFAULT_APPOINTMENT_URL, type Rate } from '@/data/rates';

const localePrefix = (locale: string) => (locale === 'en' ? '/en' : '/nl');

/** Interne links in paginateksten ([tekst](/klachten/...)) voorzien van de taalprefix. */
const withLocaleLinks = (text: string, locale: string) =>
  text.replace(/\]\(\/(?!nl\/|en\/)/g, `](${localePrefix(locale)}/`);

export const complaintUrl = (slug: string, locale: string) =>
  `${localePrefix(locale)}/klachten/${slug}`;

export const treatmentUrl = (slug: string, locale: string) =>
  `${localePrefix(locale)}/behandelvormen/${slug}`;

/** Alle klacht-slugs met een eigen pagina én een uitgewerkt artikel. */
export function getKnowledgeComplaintSlugs(): string[] {
  return getDedicatedSlugs().filter((slug) => getComplaintArticle(slug, 'nl') !== undefined);
}

export const KNOWLEDGE_TREATMENT_SLUGS = TREATMENT_SLUGS;

/* -----------------------------------------------------------------------
   Inhoudsopgave (gaat mee in de systeemprompt)
   ----------------------------------------------------------------------- */

export function buildKnowledgeIndex(locale: string = 'nl'): string {
  const isEn = locale === 'en';
  const available = new Set(getKnowledgeComplaintSlugs());
  const lines: string[] = [];

  const line = (c: ComplaintItem, indent = '') =>
    `${indent}- ${c.slug} | ${c.title}${c.shortDesc ? ` — ${c.shortDesc}` : ''}`;

  for (const category of getComplaintCategories(locale)) {
    const items: string[] = [];
    for (const c of category.complaints) {
      if (c.hasDedicatedPage && available.has(c.slug)) items.push(line(c));
      for (const child of c.children ?? []) {
        if (child.hasDedicatedPage && available.has(child.slug)) items.push(line(child, '  '));
      }
    }
    if (items.length > 0) {
      lines.push(`${category.title}:`);
      lines.push(...items);
    }
  }

  lines.push('');
  lines.push(isEn ? 'Complementary treatments:' : 'Aanvullende behandelvormen:');
  for (const slug of TREATMENT_SLUGS) {
    const t = getTreatment(slug, locale);
    if (t) lines.push(`- ${slug} | ${t.name}`);
  }

  return lines.join('\n');
}

/* -----------------------------------------------------------------------
   Tarieven als tekst (één bron met de tarievenpagina)
   ----------------------------------------------------------------------- */

export function buildRatesText(locale: string = 'nl'): string {
  const isEn = locale === 'en';
  const rates = getRates(locale);
  const fmt = (r: Rate) =>
    `- ${r.title} (${r.duration}): ${r.price}${r.priceUnit ? ` ${r.priceUnit}` : ''}. ${r.desc}\n  ${isEn ? 'Booking link' : 'Boekingslink'}: ${r.link}`;

  return [
    isEn ? '1. Acupuncture:' : '1. Acupunctuur:',
    ...rates.acupuncture.map(fmt),
    '',
    isEn ? '2. Quitting smoking & vaping (needle-free laser acupuncture):' : '2. Stoppen met roken & vapen (naaldvrije laseracupunctuur):',
    ...rates.smoking.map(fmt),
    '',
    isEn ? '3. Complementary treatments:' : '3. Aanvullende behandelvormen:',
    ...rates.complementary.map(fmt),
    '',
    `${isEn ? 'General appointment overview' : 'Algemeen afsprakenoverzicht'}: ${DEFAULT_APPOINTMENT_URL}`,
  ].join('\n');
}

/* -----------------------------------------------------------------------
   Volledige pagina-inhoud (wordt opgehaald via tools)
   ----------------------------------------------------------------------- */

export function getComplaintKnowledge(slug: string, locale: string = 'nl'): string | null {
  const a = getComplaintArticle(slug, locale);
  if (!a) return null;
  const isEn = locale === 'en';

  const text = [
    `# ${a.h1}`,
    `URL: ${complaintUrl(slug, locale)}`,
    '',
    a.heroIntro,
    '',
    `## ${a.recognition.title}`,
    ...a.recognition.paragraphs,
    '',
    `## ${a.tcmPerspective.title}`,
    a.tcmPerspective.intro,
    ...a.tcmPerspective.patterns.map(
      (p) => `- ${p.name}${p.chineseName ? ` (${p.chineseName})` : ''}: ${p.description}`
    ),
    '',
    `## ${a.treatment.title}`,
    a.treatment.intro,
    ...a.treatment.steps.map((s) => `- ${s}`),
    '',
    `${isEn ? 'Safety' : 'Veiligheid'}: ${a.treatment.safetyNote}`,
    '',
    `## ${isEn ? 'Frequently asked questions' : 'Veelgestelde vragen'}`,
    ...a.faqs.map((f) => `V: ${f.question}\nA: ${f.answer}`),
  ].join('\n');
  return withLocaleLinks(text, locale);
}

export function getTreatmentKnowledge(slug: string, locale: string = 'nl'): string | null {
  const t = getTreatment(slug, locale);
  if (!t) return null;
  const isEn = locale === 'en';

  const text = [
    `# ${t.h1}`,
    `URL: ${treatmentUrl(slug, locale)}`,
    `${isEn ? 'Duration and price' : 'Duur en prijs'}: ${t.duration}, ${t.price}`,
    `${isEn ? 'Booking link' : 'Boekingslink'}: ${t.bookingUrl}`,
    '',
    t.heroIntro,
    '',
    `## ${t.about.title}`,
    ...t.about.paragraphs,
    '',
    `## ${t.background.title}`,
    ...t.background.paragraphs,
    ...(t.principles
      ? ['', `## ${t.principles.title}`, t.principles.intro, ...t.principles.items.map((i) => `- ${i.text}`)]
      : []),
    '',
    `## ${t.indications.title}`,
    ...t.indications.items.map((i) => `- ${i}`),
    '',
    `## ${t.session.title}`,
    t.session.intro,
    ...t.session.steps.map((s) => `- ${s}`),
    t.session.afterNote,
    '',
    `${isEn ? 'Safety' : 'Veiligheid'}: ${t.safetyNote}`,
    '',
    `## ${isEn ? 'Frequently asked questions' : 'Veelgestelde vragen'}`,
    ...t.faqs.map((f) => `V: ${f.question}\nA: ${f.answer}`),
  ].join('\n');
  return withLocaleLinks(text, locale);
}
