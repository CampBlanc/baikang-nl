import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import {
  getComplaint,
  getDedicatedSlugs,
  getRelatedComplaints,
} from '@/data/complaintsData';
import { getComplaintArticle } from '@/data/complaintArticles';

export function generateStaticParams() {
  const slugs = getDedicatedSlugs();
  const locales = ['nl', 'en'];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getComplaintArticle(slug, locale);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://baikang.nl/${locale}/klachten/${slug}`,
    },
  };
}

export default async function ComplaintDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const match = getComplaint(slug, locale);
  const article = getComplaintArticle(slug, locale);

  if (!match || !match.complaint.hasDedicatedPage || !article) {
    notFound();
  }

  const { complaint, category, parent } = match;
  const relatedComplaints = getRelatedComplaints(slug, locale);
  const isEn = locale === 'en';

  // Schema.org BreadcrumbList markup
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `https://baikang.nl/${locale}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: isEn ? 'Complaints' : 'Klachten',
      item: `https://baikang.nl/${locale}/klachten`,
    },
  ];

  if (parent) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: parent.title,
      item: `https://baikang.nl/${locale}/klachten/${parent.slug}`,
    });
  }

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: parent ? 4 : 3,
    name: complaint.title,
    item: `https://baikang.nl/${locale}/klachten/${complaint.slug}`,
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden bg-ivory text-forest-deep selection:bg-gold-antique/30">
        {/* =======================================================================
            1. HERO SECTIE MET BROODKRUIMEL & ATMOSPHERIC BAMBOO
            ======================================================================= */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-12 pb-16 sm:pt-20 sm:pb-20 px-6 sm:px-10 lg:px-16">
          <AtmosphericBamboo
            variant="leaves"
            position="top-right"
            opacity="opacity-15 lg:opacity-25"
          />

          <div className="relative z-10 mx-auto max-w-4xl">
            {/* Broodkruimelpad */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 font-body text-xs uppercase tracking-widest text-text-muted"
            >
              <Link
                href="/"
                className="transition-colors hover:text-gold-antique"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/klachten"
                className="transition-colors hover:text-gold-antique"
              >
                {isEn ? 'Complaints' : 'Klachten'}
              </Link>
              {parent && (
                <>
                  <span aria-hidden="true">/</span>
                  <Link
                    href={`/klachten/${parent.slug}`}
                    className="transition-colors hover:text-gold-antique"
                  >
                    {parent.title}
                  </Link>
                </>
              )}
              <span aria-hidden="true">/</span>
              <span className="text-gold-dark font-semibold">
                {complaint.title}
              </span>
            </nav>

            <p className="eyebrow text-gold-dark mb-4">
              {parent ? parent.title : category.title}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6">
              {article.h1}
            </h1>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl">
              {article.heroIntro}
            </p>
          </div>
        </section>

        {/* =======================================================================
            2. OPTIONEEL SUBPAGINA-OVERZICHT (INDIEN TUSSENPAGINA MET CHILDREN)
            ======================================================================= */}
        {complaint.children && complaint.children.length > 0 && (
          <section className="border-b border-border-light/40 bg-surface-cream/30 py-12 sm:py-16 px-6 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow text-gold-dark mb-2">
                {isEn ? 'Specific Indications' : 'Specifieke Indicaties'}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-3">
                {isEn
                  ? 'Complaints within this category'
                  : 'Klachten binnen dit cluster'}
              </h2>
              <p className="font-body text-sm sm:text-base text-text-soft mb-8 max-w-2xl">
                {isEn
                  ? 'Explore specific symptoms and conditions treated in the clinic:'
                  : 'Bekijk hieronder de specifieke klachten die we in de praktijk behandelen:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {complaint.children.map((child) =>
                  child.hasDedicatedPage ? (
                    <Link
                      key={child.id}
                      href={`/klachten/${child.slug}`}
                      className="group border border-border-light/60 bg-ivory p-6 transition-all hover:border-gold-antique hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-display text-xl text-forest-deep group-hover:text-gold-antique transition-colors">
                          {child.title}
                        </h3>
                        <span className="text-gold-antique text-sm transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      {child.shortDesc && (
                        <p className="mt-2 font-body text-sm text-text-soft leading-relaxed">
                          {child.shortDesc}
                        </p>
                      )}
                    </Link>
                  ) : (
                    <div
                      key={child.id}
                      className="border border-border-light/40 bg-ivory/60 p-6"
                    >
                      <h3 className="font-display text-xl text-forest-deep">
                        {child.title}
                      </h3>
                      {child.shortDesc && (
                        <p className="mt-2 font-body text-sm text-text-soft leading-relaxed">
                          {child.shortDesc}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* =======================================================================
            3. HERKENNING (SYMPTOMEN & DAGELIJKSE BELEVING)
            ======================================================================= */}
        <section className="border-b border-border-light/30 bg-surface-cream/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
              {article.recognition.title}
            </h2>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
              {article.recognition.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================================================
            4. TCM PERSPECTIEF & PATRONEN
            ======================================================================= */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-12">
            <div>
              <p className="eyebrow text-gold-dark mb-3">
                {article.tcmPerspective.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                {article.tcmPerspective.title}
              </h2>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl">
                {article.tcmPerspective.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.tcmPerspective.patterns.map((pat, idx) => (
                <div
                  key={idx}
                  className="border border-border-light/60 bg-surface-cream/30 p-7 space-y-3"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl text-forest-deep">
                      {pat.name}
                    </h3>
                    {pat.chineseName && (
                      <span className="font-chinese text-gold-antique text-lg">
                        {pat.chineseName}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-text-soft leading-relaxed">
                    {pat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================================================
            5. DE BEHANDELING BIJ BAI KANG
            ======================================================================= */}
        <section className="border-t border-border-light/30 bg-surface-cream/40 py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                {article.treatment.title}
              </h2>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl">
                {article.treatment.intro}
              </p>
            </div>

            <ol className="space-y-4">
              {article.treatment.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 border-l-2 border-gold-antique bg-ivory p-5 font-body text-sm sm:text-base text-forest-deep"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-dark mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="rounded-none border border-gold-antique/30 bg-gold-antique/10 p-5 font-body text-xs sm:text-sm text-forest-deep leading-relaxed">
              <strong className="font-semibold block mb-1">
                {isEn
                  ? 'Safety and medical alignment:'
                  : 'Veiligheid en afstemming:'}
              </strong>
              {article.treatment.safetyNote}
            </div>
          </div>
        </section>

        {/* =======================================================================
            6. VEELGESTELDE VRAGEN
            ======================================================================= */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-t border-border-light/30">
            <div className="mx-auto max-w-4xl space-y-8">
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {isEn ? 'Frequently Asked Questions' : 'Veelgestelde vragen'}
              </h2>
              <div className="divide-y divide-border-light/40">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="py-6 first:pt-0 last:pb-0 space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl text-forest-deep">
                      {faq.question}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =======================================================================
            7. "ZIE OOK" / VERWANTE KLACHTEN
            ======================================================================= */}
        {relatedComplaints.length > 0 && (
          <section className="border-t border-border-light/40 bg-surface-cream/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-4xl">
              <p className="eyebrow text-gold-dark mb-2">
                {isEn ? 'Related' : 'Zie ook'}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-8">
                {isEn
                  ? 'Related complaints & patterns'
                  : 'Verwante klachten & patronen'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedComplaints.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between border border-border-light/60 bg-ivory p-6 transition-all hover:border-gold-antique hover:shadow-sm"
                  >
                    <div>
                      <h3 className="font-display text-xl text-forest-deep mb-2">
                        {item.title}
                      </h3>
                      {item.shortDesc && (
                        <p className="font-body text-xs sm:text-sm text-text-soft leading-relaxed mb-4">
                          {item.shortDesc}
                        </p>
                      )}
                    </div>
                    {item.hasDedicatedPage ? (
                      <Link
                        href={`/klachten/${item.slug}`}
                        className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-forest-deep hover:text-gold-antique transition-colors mt-auto pt-2"
                      >
                        <span>{isEn ? 'Read more' : 'Lees meer'}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className="font-body text-xs text-text-muted italic pt-2">
                        {isEn
                          ? 'In-clinic treatment available'
                          : 'Behandeling in praktijk mogelijk'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =======================================================================
            8. CTA SECTIE ONDERIN
            Met bamboo-stick-leaves.png verankerd aan de LINKERKANT
            ======================================================================= */}
        <section className="relative overflow-hidden bg-surface-cream/70 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-border-light/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-0 h-72 w-52 sm:h-96 sm:w-64 lg:h-[460px] lg:w-[300px] select-none opacity-[0.06] sm:opacity-15 lg:opacity-25 mix-blend-multiply -scale-x-100"
          >
            <Image
              src="/images/bamboo-stick-leaves.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 220px, 300px"
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
            <p className="eyebrow text-gold-dark">
              {isEn ? 'Personal Treatment Plan' : 'Persoonlijk Behandelplan'}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep leading-tight">
              {article.cta.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto">
              {article.cta.text}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-forest-deep px-9 py-4 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm transition-all hover:bg-forest-dark hover:shadow-md"
              >
                {article.cta.buttonText} →
              </Link>
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