import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getComplaintCategories } from '@/data/complaintsData';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import FadeIn from '@/components/FadeIn';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';

  if (isEn) {
    return {
      title: 'Symptoms & Health Concerns | Acupuncture Tilburg | Bai Kang TCM',
      description:
        'Discover which symptoms and health concerns acupuncture at Bai Kang TCM in Tilburg can address. From pain and tension to stress, sleep, and low energy.',
      alternates: {
        canonical: 'https://baikang.nl/en/klachten',
      },
    };
  }

  return {
    title: 'Klachten en hulpvragen | Acupunctuur Tilburg | Bai Kang TCM',
    description:
      'Ontdek bij welke klachten en hulpvragen acupunctuur bij Bai Kang TCM in Tilburg kan worden ingezet. Van pijn en spanning tot stress, slaap en vermoeidheid.',
    alternates: {
      canonical: 'https://baikang.nl/klachten',
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
        name: isEn ? 'Home' : 'Home',
        item: isEn ? 'https://baikang.nl/en' : 'https://baikang.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Symptoms & Concerns' : 'Klachten & Hulpvragen',
        item: isEn ? 'https://baikang.nl/en/klachten' : 'https://baikang.nl/klachten',
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
        {/* ==================================================
            1. HERO: Zachte getrapte fade-in
            ================================================== */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-18">
          <AtmosphericBamboo
            variant="leaves"
            position="top-right"
            opacity="opacity-10 lg:opacity-20"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-4 tracking-widest uppercase">
                {isEn ? 'Symptoms & Health Concerns' : 'Klachten & Hulpvragen'}
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] text-forest-deep mb-5 max-w-3xl mx-auto">
                {isEn
                  ? 'What are you currently experiencing?'
                  : 'Waar heb je op dit moment last van?'}
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto">
                {isEn
                  ? 'From pain and tension to fatigue, sleep difficulties, or recurring concerns. Discover whether your health question is listed below.'
                  : 'Van pijn en spanning tot vermoeidheid, slaapproblemen of klachten die steeds terugkomen. Ontdek of jouw hulpvraag ertussen staat.'}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            2. INTRODUCTIE / HERKENNING
            ================================================== */}
        <section className="relative border-b border-border-light/30 bg-surface-cream/50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <FadeIn delay={100}>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-deep leading-snug">
                {isEn
                  ? 'You do not always have to know exactly what is going on.'
                  : 'Je hoeft niet altijd precies te weten wat er aan de hand is.'}
              </h2>
              <p className="mt-4 font-body text-sm sm:text-base text-text-soft leading-relaxed">
                {isEn
                  ? 'Sometimes the cause of your discomfort is clear. Other times, you simply feel that your body is out of balance. In Traditional Chinese Medicine, we look beyond isolated symptoms to the bigger picture. Each treatment is tailored to your personal situation and health needs.'
                  : 'Soms weet je heel duidelijk waar je last van hebt. Soms merk je vooral dat je lichaam uit balans voelt. Binnen de Traditionele Chinese Geneeskunde kijken we niet alleen naar een losstaande klacht, maar naar het geheel. De behandeling wordt altijd afgestemd op jouw persoonlijke hulpvraag en situatie.'}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            3. KLACHTENCATEGORIEËN: Elke kaart animeert subtiel in
            ================================================== */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div className="space-y-10 sm:space-y-12">
              {categories.map((category, index) => (
                <FadeIn key={category.id} delay={index * 50}>
                  <article
                    id={category.id}
                    className="group/card relative scroll-mt-24 rounded-none border border-border-light/60 bg-surface-cream/35 p-8 sm:p-10 lg:p-12 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold-antique/50 hover:bg-surface-cream/60 hover:shadow-xl hover:shadow-forest-deep/5"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-gold-antique transition-transform duration-500 origin-center group-hover/card:scale-y-100"
                    />

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                      {/* Linkerhelft binnen de kaart */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique transition-colors duration-300 group-hover/card:text-gold-dark">
                            0{index + 1}
                          </span>
                          <span
                            className="h-px w-8 bg-gold-antique/30 transition-all duration-500 group-hover/card:w-12 group-hover/card:bg-gold-antique/70"
                            aria-hidden="true"
                          />
                        </div>

                        <h2 className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-forest-deep leading-tight transition-colors duration-300">
                          {category.title}
                        </h2>

                        <p className="font-body text-xs sm:text-sm font-medium uppercase tracking-wider text-text-soft/80">
                          {category.subtitle}
                        </p>

                        <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed pt-1">
                          {category.intro}
                        </p>
                      </div>

                      {/* Rechterhelft binnen de kaart */}
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="divide-y divide-border-light/40 border-t border-border-light/40 lg:border-t-0">
                          {category.complaints.map((complaint) => (
                            <div
                              key={complaint.id}
                              className="py-4 first:pt-4 lg:first:pt-0 last:pb-0"
                            >
                              {complaint.hasDedicatedPage ? (
                                <Link
                                  href={`/klachten/${complaint.slug}`}
                                  className="group/item flex items-start justify-between gap-4 transition-colors"
                                >
                                  <div>
                                    <h3 className="font-display text-lg sm:text-xl text-forest-deep transition-colors duration-300 group-hover/item:text-gold-antique">
                                      {complaint.title}
                                    </h3>
                                    {complaint.shortDesc && (
                                      <p className="mt-1 font-body text-sm text-text-soft leading-relaxed">
                                        {complaint.shortDesc}
                                      </p>
                                    )}
                                  </div>
                                  <span
                                    className="mt-1 text-forest-deep/40 font-body text-sm transition-all duration-300 group-hover/item:translate-x-2 group-hover/item:text-gold-antique"
                                    aria-hidden="true"
                                  >
                                    →
                                  </span>
                                </Link>
                              ) : (
                                <div>
                                  <h3 className="font-display text-lg sm:text-xl text-forest-deep">
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
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            4. NIET ZEKER WAAR JE MOET BEGINNEN?
            ================================================== */}
        <section className="relative overflow-hidden border-t border-border-light/40 bg-surface-cream/40 py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 h-[115%] w-32 sm:w-48 md:w-60 lg:w-72 select-none opacity-[0.06] sm:opacity-20 lg:opacity-30 mix-blend-multiply"
          >
            <div className="relative h-full w-full -scale-x-100">
              <Image
                src="/images/bamboo-stick-leaves.png"
                alt=""
                fill
                sizes="(max-width: 768px) 140px, 280px"
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-8 space-y-6">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {isEn
                  ? "Don't see your symptom listed?"
                  : 'Staat jouw klacht er niet tussen?'}
              </h2>
              <p className="mt-4 font-body text-base text-text-soft leading-relaxed max-w-2xl mx-auto">
                {isEn
                  ? 'Not every health concern fits easily into a single category. If your symptom is not listed or you are unsure where to begin, feel free to reach out or book an initial appointment. During our first session, we will discuss your situation together and see if this approach is right for you.'
                  : 'Niet iedere hulpvraag laat zich makkelijk in één categorie plaatsen. Staat jouw klacht er niet tussen of weet je niet goed waar je moet beginnen? Neem gerust contact op of plan een eerste afspraak. Tijdens het eerste gesprek bekijken we samen wat er speelt en of deze aanpak bij jou past.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto rounded-none bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
                >
                  {isEn ? 'Book appointment' : 'Afspraak maken'}
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto rounded-none border border-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-forest-deep/5"
                >
                  {isEn ? 'Contact us' : 'Neem contact op'}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            5. KORTE VERWIJZING NAAR ACUPUNCTUUR
            ================================================== */}
        <section className="border-t border-border-light/30 py-10 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <FadeIn delay={100}>
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
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            6. FINAL CTA
            ================================================== */}
        <section className="relative overflow-hidden bg-forest-deep px-6 pt-24 pb-16 lg:pt-32 lg:pb-20 text-center border-t-4 border-gold-antique">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
                {isEn
                  ? 'You do not have to know exactly what is wrong.'
                  : 'Je hoeft niet precies te weten wat er aan de hand is.'}
              </h2>
              <p className="font-body text-lg sm:text-xl text-ivory/80 italic my-6 max-w-2xl mx-auto">
                {isEn
                  ? '“An initial appointment begins with your story.”'
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
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}