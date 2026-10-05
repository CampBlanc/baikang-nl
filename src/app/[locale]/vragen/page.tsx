import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import AtmosphericBlossom from '@/components/AtmosphericBlossom';
import VragenHubClient from '@/components/VragenHubClient';
import { getAllFaqs, FaqLocale } from '@/data/faq';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNl = locale === 'nl';

  return {
    title: isNl
      ? 'Veelgestelde Vragen & Kennisbank | Bai Kang Tilburg'
      : 'Frequently Asked Questions & Clarity | Bai Kang Tilburg',
    description: isNl
      ? 'Antwoorden op vragen over acupunctuur, werkwijze, tarieven, vergoedingen en klachtenpatronen bij Bai Kang TCM in Tilburg.'
      : 'Clear answers regarding acupuncture, treatment approach, rates, health insurance, and symptoms at Bai Kang TCM in Tilburg.',
  };
}

export default async function VragenHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Server-side vertalingen ophalen
  const isEn = locale === 'en';
  let t: (key: string) => string;
  try {
    const tRaw = await getTranslations({ locale, namespace: 'Faq' });
    t = (key: string) => tRaw(key);
  } catch {
    // Veilige fallback als 'Faq' nog niet in messages/*.json staat
    t = (key: string) => {
      const fallbacks: Record<string, { nl: string; en: string }> = {
        eyebrow: { nl: 'Kennisbank & Verheldering', en: 'Knowledge & Clarity' },
        title: { nl: 'Veelgestelde Vragen', en: 'Frequently Asked Questions' },
        subtitle: {
          nl: 'Alles wat je wilt weten over behandelingen, werkwijze, vergoedingen en wat je kunt verwachten.',
          en: 'Everything you need to know regarding acupuncture treatments, approach, reimbursements, and expectations.',
        },
        moreQuestions: { nl: 'Nog een andere vraag?', en: 'Have another question?' },
        contactCta: { nl: 'Neem contact op', en: 'Contact us' },
      };
      return fallbacks[key]?.[isEn ? 'en' : 'nl'] ?? key;
    };
  }

  const faqs = getAllFaqs(locale as FaqLocale);

  return (
    <main className="bg-ivory min-h-screen text-forest-deep selection:bg-gold-antique/30">
      {/* 1. HERO MET BLOESEM-ACCENT */}
      <section className="relative overflow-hidden border-b border-border-light/40 pt-16 pb-16 sm:pt-24 sm:pb-20 px-6 sm:px-10 lg:px-16">
        <AtmosphericBlossom
          position="top-right"
          opacity="opacity-30 lg:opacity-50"
          className="-translate-y-4 translate-x-4 lg:translate-x-8 pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="eyebrow text-gold-antique mb-3 text-xs uppercase tracking-widest">
            {t('eyebrow')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-5">
            {t('title')}
          </h1>
          <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* 2. HUBCLIENT (ZOEKEN + CATEGORIE-FILTERING) */}
      <VragenHubClient initialFaqs={faqs} locale={locale} />

      {/* 3. AFSLUITENDE HULP- & CONTACT-SECTIE */}
      <section className="border-t border-border-light/60 bg-surface-cream/50 py-16 px-6 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="font-chinese text-gold-antique text-2xl tracking-widest">
            問
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-forest-deep">
            {t('moreQuestions')}
          </h3>
          <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
            {isEn
              ? 'Every body and situation is unique. Feel free to reach out to discuss your health questions directly.'
              : 'Ieder lichaam en iedere situatie is uniek. Neem gerust contact op om vrijblijvend te overleggen over jouw vraag.'}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block border border-forest-deep bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light transition-all hover:bg-forest-dark shadow-sm"
            >
              {t('contactCta')} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}