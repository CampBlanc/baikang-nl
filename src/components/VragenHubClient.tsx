'use client';

import { useState, useMemo } from 'react';
import { FaqItem } from '@/data/faq';
import FaqAccordion from '@/components/FaqAccordion';

interface VragenHubClientProps {
  initialFaqs: FaqItem[];
  locale: string;
}

type CategoryKey = 'all' | 'acupunctuur' | 'methode' | 'tarieven' | 'klachten' | 'algemeen';

interface CategoryConfig {
  key: CategoryKey;
  label: { nl: string; en: string };
  symbol: string;
}

const CATEGORIES: CategoryConfig[] = [
  { key: 'all', label: { nl: 'Alle vragen', en: 'All questions' }, symbol: '全' },
  { key: 'acupunctuur', label: { nl: 'Acupunctuur', en: 'Acupuncture' }, symbol: '針' },
  { key: 'methode', label: { nl: 'Werkwijze', en: 'Approach & Method' }, symbol: '法' },
  { key: 'tarieven', label: { nl: 'Tarieven & Vergoeding', en: 'Rates & Insurance' }, symbol: '金' },
  { key: 'klachten', label: { nl: 'Klachten', en: 'Health Concerns' }, symbol: '康' },
  { key: 'algemeen', label: { nl: 'Algemeen & Praktijk', en: 'General & Clinic' }, symbol: '道' },
];

export default function VragenHubClient({ initialFaqs, locale }: VragenHubClientProps) {
  const isEn = locale === 'en';
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filteren op categorie en eventuele zoekterm
  const filteredFaqs = useMemo(() => {
    return initialFaqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [initialFaqs, activeCategory, searchQuery]);

  // Vragen groeperen per categorie voor het "Alle"-overzicht
  const categoriesToRender = useMemo(() => {
    if (activeCategory !== 'all') {
      return CATEGORIES.filter((c) => c.key === activeCategory);
    }
    return CATEGORIES.filter((c) => c.key !== 'all');
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 pb-24">
      {/* 1. FILTER- EN ZOEKBALK */}
      <div className="pt-10 pb-12 border-b border-border-light/60 space-y-6">
        {/* Zoekbalk */}
        <div className="max-w-xl mx-auto">
          <label htmlFor="faq-search" className="sr-only">
            {isEn ? 'Search through questions' : 'Zoek in veelgestelde vragen'}
          </label>
          <div className="relative">
            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isEn
                  ? 'Search questions (e.g. needles, reimbursement, intake)...'
                  : 'Zoek een vraag (bijv. naalden, vergoeding, intake)...'
              }
              className="w-full rounded-none border border-border-light/80 bg-surface-cream/70 px-4 py-3.5 pl-11 font-body text-sm text-forest-deep placeholder:text-text-muted/60 transition-colors focus:border-gold-antique focus:outline-none focus:ring-1 focus:ring-gold-antique"
            />
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-antique text-base pointer-events-none"
              aria-hidden="true"
            >
              ⌕
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 font-body text-xs text-text-muted hover:text-forest-deep"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categorie Knoppen */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 font-body text-xs uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'border-forest-deep bg-forest-deep text-text-light shadow-sm'
                    : 'border-border-light/70 bg-surface-cream/50 text-forest-deep hover:border-gold-antique hover:bg-surface-cream'
                }`}
              >
                <span className="font-chinese text-sm text-gold-antique">
                  {cat.symbol}
                </span>
                <span>{isEn ? cat.label.en : cat.label.nl}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. RESULTATEN EN ACCORDEONS */}
      <div className="pt-8">
        {filteredFaqs.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-2xl text-forest-deep mb-2">
              {isEn ? 'No questions found' : 'Geen vragen gevonden'}
            </p>
            <p className="font-body text-sm text-text-soft">
              {isEn
                ? `No results for "${searchQuery}". Try a different keyword.`
                : `Geen resultaten voor "${searchQuery}". Probeer een andere zoekterm.`}
            </p>
          </div>
        ) : searchQuery ? (
          /* Zoekresultaten als één lijst */
          <div className="space-y-4">
            <p className="font-body text-xs uppercase tracking-widest text-gold-antique">
              {isEn
                ? `${filteredFaqs.length} results found`
                : `${filteredFaqs.length} resultaten gevonden`}
            </p>
            <FaqAccordion items={filteredFaqs} />
          </div>
        ) : (
          /* Gegroepeerde categorieën */
          <div className="space-y-16">
            {categoriesToRender.map((cat) => {
              const catItems = filteredFaqs.filter((f) => f.category === cat.key);
              if (catItems.length === 0) return null;

              return (
                <section key={cat.key} className="scroll-mt-24">
                  <div className="flex items-center gap-3 border-b border-border-light/60 pb-3 mb-6">
                    <span className="font-chinese text-gold-antique text-xl">
                      {cat.symbol}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
                      {isEn ? cat.label.en : cat.label.nl}
                    </h2>
                  </div>
                  <FaqAccordion items={catItems} />
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}