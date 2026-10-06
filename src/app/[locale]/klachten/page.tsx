import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import { getComplaintCategories } from '@/data/complaintsData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  return {
    title: isEn
      ? 'Complaints & Inquiries | Acupuncture Tilburg | Bai Kang TCM'
      : 'Klachten en hulpvragen | Acupunctuur Tilburg | Bai Kang TCM',
    description: isEn
      ? 'Discover which complaints and health goals acupuncture at Bai Kang TCM in Tilburg can address. From pain and tension to stress, sleep, and fatigue.'
      : 'Ontdek bij welke klachten en hulpvragen acupunctuur bij Bai Kang TCM in Tilburg kan worden ingezet. Van pijn en spanning tot stress, slaap en vermoeidheid.',
    alternates: {
      canonical: `https://baikang.nl/${locale}/klachten`,
    },
  };
}

export default async function KlachtenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const categories = getComplaintCategories(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://baikang.nl/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Complaints' : 'Klachten & Hulpvragen',
        item: `https://baikang.nl/${locale}/klachten`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden bg-ivory text-forest-deep selection:bg-gold-antique/30">
        {/* =======================================================================
            1. HERO: Rustig en redactioneel
            ======================================================================= */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-18">
          <AtmosphericBamboo
            variant="leaves"
            position="top-right"
            opacity="opacity-10 lg:opacity-20"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
            <p className="eyebrow text-gold-dark mb-4 tracking-widest uppercase">
              {isEn ? 'Complaints & Inquiries' : 'Klachten & Hulpvragen'}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] text-forest-deep mb-5 max-w-3xl mx-auto">
              {isEn
                ? 'Where can acupuncture help?'
                : 'Waar kan acupunctuur bij helpen?'}
            </h1>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto">
              {isEn
                ? 'From pain and tension to fatigue, sleep difficulties, or persistent recurring issues. See how Bai Kang can support your recovery.'
                : 'Van pijn en spanning tot vermoeidheid, slaapproblemen of klachten die steeds terugkomen. Bekijk waarmee Bai Kang je kan helpen.'}
            </p>
          </div>
        </section>

        {/* =======================================================================
            2. INTRODUCTIE / HERKENNING
            ======================================================================= */}
        <section className="relative border-b border-border-light/30 bg-surface-cream/50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep leading-snug">
              {isEn
                ? "You don't always need to know exactly what is wrong."
                : 'Je hoeft niet altijd precies te weten wat er aan de hand is.'}
            </h2>
            <p className="mt-4 font-body text-sm sm:text-base text-text-soft leading-relaxed">
              {isEn
                ? 'Sometimes you know clearly what is causing discomfort. Other times, you simply feel your body is out of balance. In Traditional Chinese Medicine, we look not only at isolated symptoms, but at the entire pattern. Treatment is always tailored to your personal situation.'
                : 'Soms weet je heel duidelijk waar je last van hebt. Soms merk je vooral dat je lichaam uit balans voelt. Binnen de Traditionele Chinese Geneeskunde kijken we niet alleen naar een losstaande klacht, maar naar het geheel. De behandeling wordt altijd afgestemd op jouw persoonlijke hulpvraag en situatie.'}
            </p>
          </div>
        </section>

        {/* =======================================================================
            3. KLACHTENCATEGORIEËN
            ======================================================================= */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          {/* Subtiel verticaal bamboe-accent langs de linkerflank */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-0 w-24 sm:w-36 lg:w-48 select-none opacity-[0.06] sm:opacity-[0.08] lg:opacity-15 text-forest-deep"
          >
            <img
              src="/images/bamboo-sumi.svg"
              alt=""
              className="h-full w-full object-fill"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
            <div className="space-y-16 sm:space-y-24">
              {categories.map((category, index) => (
                <article
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24 border-t border-border-light/50 pt-10 sm:pt-14"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
                    {/* Linkerzijde: Categorie context */}
                    <div className="lg:col-span-5 space-y-2.5">
                      <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique">
                        0{index + 1}
                      </span>
                      <h2 className="font-display text-3xl sm:text-4xl text-forest-deep leading-tight">
                        {category.title}
                      </h2>
                      <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-wider text-text-soft/80">
                        {category.subtitle}
                      </p>
                      <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed pt-2">
                        {category.intro}
                      </p>
                    </div>

                    {/* Rechterzijde: Klachtenlijst */}
                    <div className="lg:col-span-7">
                      <div className="divide-y divide-border-light/40">
                        {category.complaints.map((complaint) => (
                          <div
                            key={complaint.id}
                            className="py-5 first:pt-0 last:pb-0"
                          >
                            {complaint.externalUrl ? (
                              <a
                                href={complaint.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start justify-between gap-4 transition-colors"
                              >
                                <div>
                                  <h3 className="font-display text-xl sm:text-2xl text-forest-deep group-hover:text-gold-antique transition-colors">
                                    {complaint.title}
                                  </h3>
                                  {complaint.shortDesc && (
                                    <p className="mt-1 font-body text-sm text-text-soft leading-relaxed">
                                      {complaint.shortDesc}
                                    </p>
                                  )}
                                </div>
                                <span
                                  className="mt-1 text-forest-deep/40 font-body text-sm transition-all group-hover:translate-x-1 group-hover:text-gold-antique"
                                  aria-hidden="true"
                                >
                                  ↗
                                </span>
                              </a>
                            ) : complaint.hasDedicatedPage ? (
                              <Link
                                href={`/klachten/${complaint.slug}`}
                                className="group flex items-start justify-between gap-4 transition-colors"
                              >
                                <div>
                                  <h3 className="font-display text-xl sm:text-2xl text-forest-deep group-hover:text-gold-antique transition-colors">
                                    {complaint.title}
                                  </h3>
                                  {complaint.shortDesc && (
                                    <p className="mt-1 font-body text-sm text-text-soft leading-relaxed">
                                      {complaint.shortDesc}
                                    </p>
                                  )}
                                </div>
                                <span
                                  className="mt-1 text-forest-deep/40 font-body text-sm transition-all group-hover:translate-x-1.5 group-hover:text-gold-antique"
                                  aria-hidden="true"
                                >
                                  →
                                </span>
                              </Link>
                            ) : (
                              <div>
                                <h3 className="font-display text-xl sm:text-2xl text-forest-deep">
                                  {complaint.title}
                                </h3>
                                {complaint.shortDesc && (
                                  <p className="mt-1 font-body text-sm text-text-soft leading-relaxed">
                                    {complaint.shortDesc}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================================================
            4. NIET ZEKER WAAR JE MOET BEGINNEN? (MET GESPIEGELDE BAMBOESTOK)
            ======================================================================= */}
        <section className="relative overflow-hidden bg-surface-cream/70 py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border-t border-b border-border-light/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-0 h-64 w-48 sm:h-80 sm:w-60 lg:h-[420px] lg:w-[280px] select-none opacity-[0.06] sm:opacity-15 lg:opacity-25 mix-blend-multiply -scale-x-100"
          >
            <Image
              src="/images/bamboo-stick-leaves.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 200px, 280px"
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-4">
            <p className="eyebrow text-gold-dark">
              {isEn ? 'Personal Consultation' : 'Persoonlijk overleg'}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-forest-deep leading-tight">
              {isEn
                ? 'Is your complaint not listed?'
                : 'Staat jouw klacht er niet tussen?'}
            </h2>
            <p className="font-body text-base text-text-soft leading-relaxed max-w-xl mx-auto">
              {isEn
                ? 'Within Traditional Chinese Medicine, we look at the underlying pattern behind your symptoms. Feel free to contact us to discuss what acupuncture can do for you.'
                : 'Binnen de Traditionele Chinese Geneeskunde kijken we naar het onderliggende patroon achter je klachten. Neem gerust contact op om samen af te stemmen wat acupunctuur voor jou kan betekenen.'}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-block bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm transition-all hover:bg-forest-dark"
              >
                {isEn ? 'Get in touch' : 'Neem contact op'}
              </Link>
            </div>
          </div>
        </section>

        {/* =======================================================================
            5. KORTE VERWIJZING NAAR ACUPUNCTUUR
            ======================================================================= */}
        <section className="border-b border-border-light/30 py-10 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <p className="font-body text-sm text-text-soft">
              {isEn
                ? 'Curious how acupuncture is applied at Bai Kang?'
                : 'Benieuwd hoe acupunctuur binnen Bai Kang wordt toegepast?'}{' '}
              <Link
                href="/acupunctuur"
                className="group inline-flex items-center gap-1.5 font-semibold text-forest-deep hover:text-gold-antique transition-colors ml-1"
              >
                <span className="border-b border-forest-deep/30 pb-0.5 group-hover:border-gold-antique transition-colors">
                  {isEn ? 'More about acupuncture' : 'Meer over acupunctuur'}
                </span>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </p>
          </div>
        </section>

        {/* =======================================================================
            6. FINAL CTA
            ======================================================================= */}
        <section className="relative overflow-hidden bg-forest-deep px-6 pt-24 pb-16 lg:pt-32 lg:pb-20 text-center border-t-4 border-gold-antique">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
              {isEn
                ? "You don't need to know exactly what is wrong right away."
                : 'Je hoeft niet precies te weten wat er aan de hand is.'}
            </h2>
            <p className="font-body text-lg sm:text-xl text-ivory/80 italic mb-8 max-w-2xl mx-auto">
              {isEn
                ? '“A first appointment begins with your story.”'
                : '“Een eerste afspraak begint met jouw verhaal.”'}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-none bg-gold-antique px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-ivory hover:shadow-lg"
              >
                {isEn ? 'Book appointment →' : 'Afspraak maken →'}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}