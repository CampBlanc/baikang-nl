import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import FadeIn from '@/components/FadeIn';
import FaqAccordion from '@/components/FaqAccordion';
import { getFaqsByCategory, FaqLocale } from '@/data/faq';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  try {
    const t = await getTranslations({ locale, namespace: 'Acupuncture' });
    return {
      title: t('metaTitle'),
      description: t('metaDescription'),
    };
  } catch {
    return {
      title: 'Wat is Acupunctuur? | Traditionele Chinese Geneeskunde Tilburg | Bai Kang',
      description:
        'Ontdek hoe acupunctuur werkt vanuit zowel Traditionele Chinese Geneeskunde als moderne fysiologie. Persoonlijke diagnostiek, rustige behandelingen en laseracupunctuur in Tilburg.',
    };
  }
}

export default function AcupuncturePage() {
  const t = useTranslations('Acupuncture');
  const tFaq = useTranslations('Faq');
  const locale = useLocale() as FaqLocale;

  // Haal de specifieke 'acupunctuur' FAQs op in de actieve taal
  const acupunctureFaqs = getFaqsByCategory('acupunctuur', locale);

  return (
    <main className="bg-ivory text-text selection:bg-gold-antique/30 overflow-x-clip">
      
      {/* ========================================================
          1. HERO — Rustig binnenkomen met getrapte fades
          ======================================================== */}
      <section className="relative overflow-hidden w-full border-b border-border-light/30 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <AtmosphericBamboo
          variant="leaves"
          position="top-right"
          opacity="opacity-15"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-4">
              {t('heroEyebrow')}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6">
              {t('heroTitle')}
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto mb-10">
              {t('heroIntro')}
            </p>
          </FadeIn>
          
          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/klachten"
                className="w-full sm:w-auto rounded-none border border-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-forest-deep/5 transition-all"
              >
                {t('btnComplaints')}
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-none bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm hover:bg-forest-dark transition-all"
              >
                {t('btnAppointment')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          2. EDITORIAL SPLIT — Tekst links, naald macrofoto rechts
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark">{t('holisticEyebrow')}</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-tight mt-2">
                  {t('holisticTitle')}
                </h2>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
              </FadeIn>
              
              <FadeIn delay={150}>
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>{t('holisticP1')}</p>
                  <p>{t('holisticP2')}</p>
                  <p>{t('holisticP3')}</p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={200}>
                <div className="relative aspect-[4/3] w-full max-w-lg mx-auto border border-border-light/60 p-3 bg-surface-cream/50 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/10-De naald als detail.png"
                      alt={t('needleAlt')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. VISUEEL INTERMEZZO — Moderne fysiologie & De Visual
          ======================================================== */}
      <section 
        id="tcm" 
        className="scroll-mt-24 lg:scroll-mt-32 bg-surface-cream py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40"
      >
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-3">{t('modernEyebrow')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-6">
              {t('modernTitle')}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl mx-auto mb-16">
              {t('modernIntro')}
            </p>
          </FadeIn>

          {/* De Visual: Lichaam · Patronen · Balans */}
          <FadeIn delay={150}>
            <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto border border-border-light shadow-md bg-ivory overflow-hidden mb-16">
              <Image
                src="/images/lichaam-patronen-balans.png"
                alt={t('visualAlt')}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          {/* Drie fasen onder de visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gold-antique/30 pt-12">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-2">{t('phase1Eyebrow')}</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">{t('phase1Title')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('phase1Desc')}
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="eyebrow text-gold-dark mb-2">{t('phase2Eyebrow')}</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">{t('phase2Title')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('phase2Desc')}
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="eyebrow text-gold-dark mb-2">{t('phase3Eyebrow')}</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">{t('phase3Title')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('phase3Desc')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TCM VISIE — Typografische compositie
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-5">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark mb-3">{t('tcmEyebrow')}</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] text-forest-deep leading-tight mb-6">
                  {t('tcmTitle')}
                </h2>
                <blockquote className="font-display italic text-2xl text-forest-soft border-l-2 border-gold-antique pl-6 my-6">
                  {t('tcmQuote')}
                </blockquote>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              <FadeIn delay={100} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">{t('qiTitle')}</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('qiDesc')}
                </p>
              </FadeIn>

              <FadeIn delay={200} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">{t('balanceTitle')}</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('balanceDesc')}
                </p>
              </FadeIn>

              <FadeIn delay={300} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">{t('diffTitle')}</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('diffDesc')}
                </p>
              </FadeIn>

              <FadeIn delay={400} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">{t('lifestyleTitle')}</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('lifestyleDesc')}
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. KLACHTEN — Functioneel overzicht met link naar rookvrij.nu
          ======================================================== */}
      <section className="bg-surface-cream py-24 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow text-gold-dark mb-3">{t('complaintsEyebrow')}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                {t('complaintsTitle')}
              </h2>
              <p className="font-body text-base text-text-soft">
                {t('complaintsIntro')}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-14">
            <FadeIn delay={50} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catPainTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('catPainDesc')}
              </p>
            </FadeIn>

            <FadeIn delay={150} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catStressTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('catStressDesc')}
              </p>
            </FadeIn>

            <FadeIn delay={250} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catEnergyTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('catEnergyDesc')}
              </p>
            </FadeIn>

            <FadeIn delay={350} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catDigestionTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('catDigestionDesc')}
              </p>
            </FadeIn>

            <FadeIn delay={450} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catGenderTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {t('catGenderDesc')}
              </p>
            </FadeIn>

            {/* Stoppen met roken met externe link */}
            <FadeIn delay={550} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('catSmokingTitle')}</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed mb-3">
                {t('catSmokingDesc')}
              </p>
              <a
                href="https://rookvrij.nu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-forest-deep transition-colors group"
              >
                <span className="border-b border-gold-dark/40 group-hover:border-forest-deep transition-colors">
                  rookvrij.nu
                </span>
                <span className="text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                  ↗
                </span>
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="text-center">
              <Link
                href="/klachten"
                className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors group"
              >
                <span>{t('ctaComplaints')}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          6. BEHANDELPROCES — Verticale tijdlijn
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={0}>
            <div className="text-center mb-16">
              <p className="eyebrow text-gold-dark mb-3">{t('processEyebrow')}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {t('processTitle')}
              </h2>
            </div>
          </FadeIn>

          <div className="relative border-l border-gold-antique/40 ml-4 sm:ml-32 pl-8 sm:pl-12 space-y-12">
            
            <FadeIn delay={50} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                {t('step1Num')}
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('step1Title')}</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('step1Desc')}
              </p>
            </FadeIn>

            <FadeIn delay={150} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                {t('step2Num')}
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('step2Title')}</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('step2Desc')}
              </p>
            </FadeIn>

            <FadeIn delay={250} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                {t('step3Num')}
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('step3Title')}</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('step3Desc')}
              </p>
            </FadeIn>

            <FadeIn delay={350} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                {t('step4Num')}
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">{t('step4Title')}</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('step4Desc')}
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. SFEER & ONTSPANNING — Grote liggende foto
          ======================================================== */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={0}>
            <div className="relative aspect-[16/9] w-full border border-border-light/60 p-3 bg-surface-cream/40 mb-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/9-rust-en-ontspanning.png"
                  alt={t('relaxAlt')}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {t('relaxTitle')}
              </h2>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed">
                {t('relaxDesc')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          8. LASERACUPUNCTUUR — Naaldvrij alternatief
          ======================================================== */}
      <section 
        id="laseracupunctuur" 
        className="scroll-mt-24 lg:scroll-mt-32 bg-surface-cream/70 py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40"
      >
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark">{t('laserEyebrow')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] text-forest-deep leading-tight mt-2">
              {t('laserTitle')}
            </h2>
            <div className="flex items-center justify-center gap-3 my-5">
              <span className="h-px w-10 bg-gold-antique/40" />
              <span className="font-chinese text-gold-antique text-base" aria-hidden="true">光</span>
              <span className="h-px w-10 bg-gold-antique/40" />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
              <p>{t('laserP1')}</p>
              <p>{t('laserP2')}</p>
              <p className="text-sm text-text-muted pt-2">
                {t('laserP3')}{' '}
                <a
                  href="https://rookvrij.nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-dark underline underline-offset-2 hover:text-forest-deep transition-colors inline-flex items-center gap-0.5"
                >
                  <span>rookvrij.nu</span>
                  <span aria-hidden="true" className="text-[10px]">↗</span>
                </a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          9. ZORGVULDIGHEID — Subtiele redactionele context
          ======================================================== */}
      <section className="py-16 px-6 sm:px-10 max-w-2xl mx-auto text-center border-b border-border-light/40">
        <FadeIn delay={0}>
          <p className="eyebrow text-gold-dark mb-3">{t('careEyebrow')}</p>
          <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
            {t('careDesc')}
          </p>
        </FadeIn>
      </section>

      {/* ========================================================
          10. VEELGESTELDE VRAGEN OVER ACUPUNCTUUR — FAQ Accordeon
          ======================================================== */}
      <section className="bg-surface-cream/40 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={100}>
            <FaqAccordion
              items={acupunctureFaqs}
              eyebrow={tFaq('eyebrow')}
              title={tFaq('title')}
            />
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-8 text-center font-body text-sm text-text-soft">
              <p>
                {tFaq('moreQuestions')}{' '}
                <Link
                  href="/contact"
                  className="font-semibold text-gold-dark hover:text-forest-deep underline underline-offset-4 transition-colors"
                >
                  {tFaq('contactCta')} →
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          11. AFSLUITENDE DONKERE CTA
          ======================================================== */}
      <section className="bg-forest-deep py-20 px-6 sm:px-12 text-center text-text-light">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-antique mb-4">{t('finalCtaEyebrow')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-6">
              {t('finalCtaTitle')}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-light-soft/80 max-w-xl mx-auto mb-10 leading-relaxed">
              {t('finalCtaIntro')}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-none bg-gold-antique px-9 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-gold-warm transition-all shadow-md"
            >
              {t('finalCtaButton')}
            </Link>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}