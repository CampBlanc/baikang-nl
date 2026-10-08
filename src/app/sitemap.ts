import type { MetadataRoute } from 'next';
import { getDedicatedSlugs } from '@/data/complaintsData';
import { TREATMENT_SLUGS } from '@/data/treatments';

const BASE_URL = 'https://baikang.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['nl', 'en'];

  // Statische hoofdroutes binnen de website
  const staticPages = [
    '',
    '/klachten',
    '/acupunctuur',
    '/methode',
    '/over-patrick',
    '/tarieven',
    '/vragen',
    '/contact',
    '/privacy',
    '/voorwaarden',
  ];

  // Haalt dynamisch alle actieve klacht-slugs op (inclusief eventuele actieve subklachten)
  const complaintSlugs = getDedicatedSlugs();
  const treatmentPages = TREATMENT_SLUGS.map((slug) => `/behandelvormen/${slug}`);

  const routes: MetadataRoute.Sitemap = [];

  // 1. Statische pagina's toevoegen voor beide talen
  for (const page of [...staticPages, ...treatmentPages]) {
    for (const locale of locales) {
      routes.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1.0 : page === '/klachten' ? 0.9 : page === '/privacy' || page === '/voorwaarden' ? 0.3 : 0.8,
        alternates: {
          languages: {
            nl: `${BASE_URL}/nl${page}`,
            en: `${BASE_URL}/en${page}`,
            'x-default': `${BASE_URL}/nl${page}`,
          },
        },
      });
    }
  }

  // 2. Actieve detailpagina's van klachten toevoegen
  for (const slug of complaintSlugs) {
    for (const locale of locales) {
      routes.push({
        url: `${BASE_URL}/${locale}/klachten/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            nl: `${BASE_URL}/nl/klachten/${slug}`,
            en: `${BASE_URL}/en/klachten/${slug}`,
            'x-default': `${BASE_URL}/nl/klachten/${slug}`,
          },
        },
      });
    }
  }

  return routes;
}