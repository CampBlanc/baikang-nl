import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import InlineLinks from '@/components/InlineLinks';
import { getTreatment, getTreatments, TREATMENT_SLUGS } from '@/data/treatments';

export function generateStaticParams() {
  const locales = ['nl', 'en'];
  return locales.flatMap((locale) =>
    TREATMENT_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = getTreatment(slug, locale);
  if (!treatment) return {};

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: {
      canonical: `https://baikang.nl/${locale}/behandelvormen/${slug}`,
    },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const treatment = getTreatment(slug, locale);
  if (!treatment) notFound();

  const isEn = locale === 'en';
  const others = getTreatments(locale).filter((t) => t.slug !== slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://baikang.nl/${locale}` },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Treatments' : 'Behandelvormen',
        item: `https://baikang.nl/${locale}/methode`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: treatment.name,
        item: `https://baikang.nl/${locale}/behandelvormen/${slug}`,
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
        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-12 pb-16 sm:pt-20 sm:pb-20 px-6 sm:px-10 lg:px-16">
          <AtmosphericBamboo variant="leaves" position="top-right" opacity="opacity-15 lg:opacity-25" />

          <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 font-body text-xs uppercase tracking-widest text-text-muted"
              >
                <Link href="/" className="hover:text-gold-antique transition-colors">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/methode" className="hover:text-gold-antique transition-colors">
                  {isEn ? 'Treatments' : 'Behandelvormen'}
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-forest-deep">{treatment.name}</span>
              </nav>

              <span className="font-chinese text-gold-antique text-lg block mb-3" aria-hidden="true">
                {treatment.glyph}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6">
                {treatment.h1}
              </h1>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mb-8">
                {treatment.heroIntro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={treatment.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm hover:bg-forest-dark transition-all"
                >
                  {isEn ? `Book ${treatment.name}` : `${treatment.name} boeken`} →
                </a>
                <p className="font-body text-sm text-text-muted">
                  {treatment.duration} · {treatment.price}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto border border-border-light/60 p-3 bg-surface-cream/50 shadow-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={treatment.image.src}
                    alt={treatment.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    style={{ objectPosition: treatment.image.position ?? 'center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WAT IS HET */}
        <section className="border-b border-border-light/30 bg-surface-cream/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">{treatment.about.title}</h2>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
              {treatment.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ACHTERGROND */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="eyebrow text-gold-dark">{treatment.background.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">{treatment.background.title}</h2>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
              {treatment.background.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OPTIONEEL: LEEFREGELS (REIKI) */}
        {treatment.principles && (
          <section className="relative overflow-hidden border-y border-border-light/40 bg-forest-deep py-20 sm:py-28 px-6 sm:px-10 lg:px-16">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="eyebrow text-gold-antique mb-3">{treatment.principles.eyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-light mb-6">
                {treatment.principles.title}
              </h2>
              <p className="font-body text-base sm:text-lg text-text-light/80 leading-relaxed mb-12">
                {treatment.principles.intro}
              </p>

              <ol className="space-y-6 text-left sm:text-center">
                {treatment.principles.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:items-center gap-1 border-t border-gold-antique/30 pt-6 first:border-t-0 first:pt-0"
                  >
                    <span className="font-chinese text-gold-antique text-xl" lang="ja" aria-hidden="true">
                      {item.original}
                    </span>
                    <span className="font-display text-xl sm:text-2xl text-text-light">{item.text}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-12 font-body text-sm text-text-light/70 leading-relaxed italic">
                {treatment.principles.outro}
              </p>
            </div>
          </section>
        )}

        {/* 5. WANNEER INGEZET */}
        <section className="border-b border-border-light/30 bg-surface-cream/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">{treatment.indications.title}</h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed">
              {treatment.indications.intro}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.indications.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border border-border-light/60 bg-ivory p-4 font-body text-sm sm:text-base text-forest-deep"
                >
                  <span className="text-gold-antique mt-0.5" aria-hidden="true">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. VERLOOP */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">{treatment.session.title}</h2>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl">
                {treatment.session.intro}
              </p>
            </div>

            <ol className="space-y-4">
              {treatment.session.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-l-2 border-gold-antique bg-surface-cream/40 p-5 font-body text-sm sm:text-base text-forest-deep"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-dark mt-0.5">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-2 border border-border-light/60 bg-ivory p-5 sm:flex-row sm:items-baseline sm:gap-6 sm:p-6">
              <p className="eyebrow shrink-0 text-gold-dark">{isEn ? 'Afterwards' : 'Na afloop'}</p>
              <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                {treatment.session.afterNote}
              </p>
            </div>

            <div className="border border-gold-antique/30 bg-gold-antique/10 p-5 font-body text-xs sm:text-sm text-forest-deep leading-relaxed">
              <strong className="font-semibold block mb-1">
                {isEn ? 'Safety and medical alignment:' : 'Veiligheid en afstemming:'}
              </strong>
              {treatment.safetyNote}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        {treatment.faqs.length > 0 && (
          <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-t border-border-light/30 bg-surface-cream/40">
            <div className="mx-auto max-w-4xl space-y-8">
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {isEn ? 'Frequently Asked Questions' : 'Veelgestelde vragen'}
              </h2>
              <div className="divide-y divide-border-light/40">
                {treatment.faqs.map((faq, i) => (
                  <div key={i} className="py-6 first:pt-0 last:pb-0 space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl text-forest-deep">{faq.question}</h3>
                    <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                      <InlineLinks text={faq.answer} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 8. ANDERE BEHANDELVORMEN */}
        <section className="border-t border-border-light/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow text-gold-dark mb-2">{isEn ? 'See also' : 'Zie ook'}</p>
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-8">
              {isEn ? 'Other treatments' : 'Andere behandelvormen'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/behandelvormen/${o.slug}`}
                  className="group border border-border-light/60 bg-ivory p-6 transition-all hover:border-gold-antique hover:shadow-sm"
                >
                  <span className="font-chinese text-gold-antique text-sm block mb-2" aria-hidden="true">
                    {o.glyph}
                  </span>
                  <h3 className="font-display text-xl text-forest-deep group-hover:text-gold-antique transition-colors">
                    {o.name} <span className="text-sm" aria-hidden="true">→</span>
                  </h3>
                </Link>
              ))}
              <Link
                href="/acupunctuur"
                className="group border border-border-light/60 bg-ivory p-6 transition-all hover:border-gold-antique hover:shadow-sm"
              >
                <span className="font-chinese text-gold-antique text-sm block mb-2" aria-hidden="true">
                  针灸
                </span>
                <h3 className="font-display text-xl text-forest-deep group-hover:text-gold-antique transition-colors">
                  {isEn ? 'Acupuncture' : 'Acupunctuur'} <span className="text-sm" aria-hidden="true">→</span>
                </h3>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="relative overflow-hidden bg-surface-cream/70 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-border-light/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-10 bottom-0 z-0 h-72 w-52 sm:h-96 sm:w-64 lg:h-[460px] lg:w-[300px] select-none opacity-[0.06] sm:opacity-15 lg:opacity-25 mix-blend-multiply -scale-x-100"
          >
            <Image
              src="/images/bamboo-stick-leaves.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 220px, 300px"
              className="object-contain"
              style={{ objectPosition: 'center bottom' }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
            <p className="eyebrow text-gold-dark">
              {treatment.duration} · {treatment.price}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep leading-tight">
              {treatment.cta.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto">
              {treatment.cta.text}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={treatment.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-forest-deep px-9 py-4 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm transition-all hover:bg-forest-dark hover:shadow-md"
              >
                {isEn ? 'Book an appointment' : 'Maak een afspraak'} →
              </a>
              <Link
                href="/tarieven"
                className="w-full sm:w-auto border border-forest-deep/40 px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-forest-deep/5 transition-all"
              >
                {isEn ? 'View rates & coverage' : 'Bekijk tarieven & vergoeding'}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
