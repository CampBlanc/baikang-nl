import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getComplaint, getDedicatedSlugs } from '@/data/complaintsData';
import {
  getComplaintArticle,
  type ComplaintArticle,
  type ComplaintArticlePattern,
  type ComplaintArticleFaq,
} from '@/data/complaints';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import FadeIn from '@/components/FadeIn';

export async function generateStaticParams() {
  return getDedicatedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getComplaintArticle(slug, locale);
  const match = getComplaint(slug, locale);

  if (!article || !match || !match.complaint.hasDedicatedPage) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://baikang.nl/${locale === 'en' ? 'en/' : ''}klachten/${slug}`,
    },
  };
}

export default async function ComplaintDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEn = locale === 'en';

  const match = getComplaint(slug, locale);
  const article: ComplaintArticle | undefined = getComplaintArticle(slug, locale);

  if (!match || !match.complaint.hasDedicatedPage || !article) {
    notFound();
  }

  const { complaint } = match;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: article.h1,
    description: article.metaDescription,
    url: `https://baikang.nl/${isEn ? 'en/' : ''}klachten/${slug}`,
    aspect: ['Overview', 'Treatment', 'AlternativeTherapy'],
    medicalAudience: {
      '@type': 'Patient',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden bg-ivory text-forest-deep selection:bg-gold-antique/30">
        {/* ==================================================
            1. HERO & BROODKRUIMELS (Bovenin met AtmosphericBamboo)
            ================================================== */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-16 pb-14 sm:pt-20 sm:pb-18">
          <AtmosphericBamboo
            variant="leaves"
            position="top-right"
            opacity="opacity-10 lg:opacity-20"
            priority={true}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8">
            <nav className="mb-6 font-body text-xs uppercase tracking-widest text-text-soft/70">
              <Link href="/klachten" className="hover:text-gold-antique transition-colors">
                {isEn ? 'Complaints' : 'Klachten'}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-forest-deep font-semibold">{complaint.title}</span>
            </nav>

            <FadeIn delay={50}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-forest-deep mb-6">
                {article.h1}
              </h1>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl">
                {article.heroIntro}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            2. HERKENNING & OORZAKEN
            ================================================== */}
        <section className="relative border-b border-border-light/30 bg-surface-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <FadeIn>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-deep mb-4">
                {article.recognition.title}
              </h2>
              <div className="space-y-4">
                {article.recognition.paragraphs.map((p: string, idx: number) => (
                  <p key={idx} className="font-body text-base text-text-soft leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            3. TCM-VISIE & PATRONEN
            ================================================== */}
        <section className="relative py-16 sm:py-24 border-b border-border-light/30">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <FadeIn>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique mb-2 block">
                {article.tcmPerspective.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-6">
                {article.tcmPerspective.title}
              </h2>
              <p className="font-body text-base text-text-soft leading-relaxed mb-10">
                {article.tcmPerspective.intro}
              </p>

              <div className="space-y-6">
                {article.tcmPerspective.patterns.map((pattern: ComplaintArticlePattern, idx: number) => (
                  <div
                    key={idx}
                    className="border-l-2 border-gold-antique/60 bg-surface-cream/30 p-6 transition-all hover:bg-surface-cream/50"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl text-forest-deep">
                        {pattern.name}
                      </h3>
                      {pattern.chineseName && (
                        <span className="font-chinese text-sm text-gold-antique/70">
                          {pattern.chineseName}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                      {pattern.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            4. DE BEHANDELING BIJ BAI KANG
            ================================================== */}
        <section className="relative py-16 sm:py-24 bg-surface-cream/20 border-b border-border-light/30">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                {article.treatment.title}
              </h2>
              <p className="font-body text-base text-text-soft leading-relaxed mb-8">
                {article.treatment.intro}
              </p>

              <ol className="space-y-4 mb-10">
                {article.treatment.steps.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 border border-gold-antique/50 font-body text-xs font-semibold text-gold-antique">
                      0{idx + 1}
                    </span>
                    <span className="font-body text-base text-text-soft leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="bg-ivory border border-border-light/60 p-6 text-sm text-text-soft leading-relaxed">
                <p>
                  <strong className="text-forest-deep font-semibold">
                    {isEn ? 'Safety and coordination: ' : 'Veiligheid en afstemming: '}
                  </strong>
                  {article.treatment.safetyNote}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            5. VEELGESTELDE VRAGEN OVER DEZE KLACHT
            ================================================== */}
        <section className="relative py-16 sm:py-24 border-b border-border-light/30">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-8 text-center">
                {isEn ? 'Frequently Asked Questions' : 'Veelgestelde vragen'}
              </h2>
              <div className="divide-y divide-border-light/40">
                {article.faqs.map((faq: ComplaintArticleFaq, idx: number) => (
                  <div key={idx} className="py-6">
                    <h3 className="font-display text-xl text-forest-deep mb-2">
                      {faq.question}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ==================================================
            6. CTA BANNER ONDERIN
            Met bamboo-stick-leaves.png verankerd aan de LINKERKANT
            ================================================== */}
        <section className="relative overflow-hidden bg-forest-deep px-6 py-20 sm:py-24 text-center border-t-4 border-gold-antique">
          
          {/* Gespiegelde bamboe links op de donkere banner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 sm:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-0 h-72 w-52 sm:h-96 sm:w-64 lg:h-[460px] lg:w-[300px] select-none opacity-10 lg:opacity-20 mix-blend-screen -scale-x-100"
          >
            <Image
              src="/images/bamboo-stick-leaves.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 220px, 300px"
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-5">
            <p className="eyebrow text-gold tracking-widest uppercase text-xs">
              {isEn ? 'Personal Treatment Plan' : 'Persoonlijk Behandelplan'}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory leading-tight">
              {article.cta.title}
            </h2>
            <p className="font-body text-base text-ivory/80 leading-relaxed max-w-xl mx-auto">
              {article.cta.text}
            </p>
            <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-block bg-gold-antique px-9 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-ivory hover:shadow-lg"
              >
                {article.cta.buttonText} →
              </Link>
              <Link
                href="/tarieven"
                className="w-full sm:w-auto inline-block border border-ivory/40 px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-ivory/10 transition-all"
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