import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import FadeIn from '@/components/FadeIn';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  try {
    const t = await getTranslations({ locale, namespace: 'Method' });
    return {
      title: t('metadata.title'),
      description: t('metadata.description'),
    };
  } catch {
    return {
      title: 'Mijn Werkwijze | Acupunctuur Tilburg | Bai Kang TCM',
      description:
        'Lees hoe een behandeling bij Bai Kang TCM in Tilburg verloopt. Van intake tot acupunctuur en evaluatie.',
    };
  }
}

export default function MethodePage() {
  const t = useTranslations('Method');

  return (
    <main className="bg-ivory text-text selection:bg-gold-antique/30">
      {/* ========================================================
          1. HERO — Zonder animatie-override op de bamboe
          ======================================================== */}
      <section className="relative overflow-hidden w-full border-b border-border-light/30 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        <AtmosphericBamboo
          variant="leaves"
          position="top-right"
          opacity="opacity-[0.15] lg:opacity-20"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-4">
              {t('hero.eyebrow')}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6 max-w-3xl mx-auto">
              {t('hero.title')}
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto mb-10">
              {t('hero.intro')}
            </p>
          </FadeIn>

          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-none bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm transition-all hover:bg-forest-dark"
              >
                {t('hero.ctaAppointment')}
              </Link>
              <Link
                href="/acupunctuur"
                className="w-full sm:w-auto rounded-none border border-forest-deep/30 px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-forest-deep/5"
              >
                {t('hero.ctaAcupuncture')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          2. EERST VOORBEREIDEN, DAN VERDIEPEN — Editorial Split
          ======================================================== */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Tekstzijde */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0}>
                <div className="flex items-center gap-3">
                  <span className="font-chinese text-gold text-lg" aria-hidden="true">
                    心
                  </span>
                  <p className="eyebrow text-gold-dark">{t('preparation.eyebrow')}</p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-tight">
                  {t('preparation.title')}
                </h2>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
              </FadeIn>

              <FadeIn delay={300}>
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>{t('preparation.p1')}</p>
                  <p>{t('preparation.p2')}</p>
                  <p>{t('preparation.p3')}</p>
                </div>
              </FadeIn>

              <FadeIn delay={450}>
                <blockquote className="border-l-2 border-gold-antique/70 pl-5 pt-1 text-forest-deep font-display italic text-xl">
                  {t('preparation.quote')}
                </blockquote>
              </FadeIn>
            </div>

            {/* Fotografie: Intake en luisteren */}
            <div className="lg:col-span-5">
              <FadeIn delay={250}>
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto border border-border-light/60 p-3 bg-surface-cream/40 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/intake-luisteren.png"
                      alt={t('preparation.imageAlt')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
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
          3. JOUW BEHANDELING STAP VOOR STAP — Fasering Tijdlijn
          ======================================================== */}
      <section className="bg-surface-cream/50 py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-3">{t('steps.eyebrow')}</p>
            </FadeIn>
            <FadeIn delay={150}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-4">
                {t('steps.title')}
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="font-body text-base text-text-soft">
                {t('steps.subtitle')}
              </p>
            </FadeIn>
          </div>

          {/* Verticale Tijdlijn */}
          <div className="relative border-l border-gold-antique/40 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
            
            {/* FASE 1: VOORAF */}
            <FadeIn delay={100}>
              <div className="relative">
                <span className="inline-block text-[11px] font-body uppercase tracking-widest text-gold-dark font-semibold bg-surface-cream border border-gold-antique/30 px-3 py-1 mb-4">
                  {t('steps.phase1')}
                </span>

                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-2xl text-gold-antique block mb-1">
                  01
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-3">
                  {t('steps.step1Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('steps.step1Desc')}
                </p>
              </div>
            </FadeIn>

            {/* FASE 2: IN DE PRAKTIJK */}
            <FadeIn delay={200}>
              <div className="relative">
                <span className="inline-block text-[11px] font-body uppercase tracking-widest text-gold-dark font-semibold bg-surface-cream border border-gold-antique/30 px-3 py-1 mb-4">
                  {t('steps.phase2')}
                </span>

                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-2xl text-gold-antique block mb-1">
                  02
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-3">
                  {t('steps.step2Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('steps.step2Desc')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-2xl text-gold-antique block mb-1">
                  03
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-3">
                  {t('steps.step3Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('steps.step3Desc')}
                </p>
              </div>
            </FadeIn>

            {/* FASE 3: HET VERVOLGTRAJECT */}
            <FadeIn delay={400}>
              <div className="relative">
                <span className="inline-block text-[11px] font-body uppercase tracking-widest text-gold-dark font-semibold bg-surface-cream border border-gold-antique/30 px-3 py-1 mb-4">
                  {t('steps.phase3')}
                </span>

                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-2xl text-gold-antique block mb-1">
                  04
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-3">
                  {t('steps.step4Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('steps.step4Desc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ACUPUNCTUUR ALS BASIS — Macro Beeld & Filosofie
          ======================================================== */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Macrofoto naald-detail */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <FadeIn delay={200}>
                <div className="relative aspect-[4/3] w-full max-w-lg mx-auto border border-border-light/60 p-3 bg-surface-cream/50 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/naald-detail.png"
                      alt={t('acupunctureBasis.imageAlt')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Tekstzijde */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-6">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark">{t('acupunctureBasis.eyebrow')}</p>
              </FadeIn>
              <FadeIn delay={150}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-tight">
                  {t('acupunctureBasis.title')}
                </h2>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
              </FadeIn>
              <FadeIn delay={300}>
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>{t('acupunctureBasis.p1')}</p>
                  <p>{t('acupunctureBasis.p2')}</p>
                  <p>{t('acupunctureBasis.p3')}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. AANVULLENDE BEHANDELVORMEN — Typografische Grid
          ======================================================== */}
      <section className="bg-surface-cream py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl mb-16">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-3">{t('additional.eyebrow')}</p>
            </FadeIn>
            <FadeIn delay={150}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-4">
                {t('additional.title')}
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed">
                {t('additional.intro')}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Cupping */}
            <FadeIn delay={100}>
              <div className="border-t border-border-light/80 pt-6">
                <span className="font-chinese text-gold text-sm block mb-2" aria-hidden="true">
                  拔罐
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-3">
                  {t('additional.cuppingTitle')}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('additional.cuppingDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Guasha */}
            <FadeIn delay={200}>
              <div className="border-t border-border-light/80 pt-6">
                <span className="font-chinese text-gold text-sm block mb-2" aria-hidden="true">
                  刮痧
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-3">
                  {t('additional.guashaTitle')}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('additional.guashaDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Laseracupunctuur */}
            <FadeIn delay={300}>
              <div className="border-t border-border-light/80 pt-6">
                <span className="font-chinese text-gold text-sm block mb-2" aria-hidden="true">
                  激光
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-3">
                  {t('additional.laserTitle')}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('additional.laserDesc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. HOE VAAK? — Nuchtere verwachting
          ======================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-3">{t('frequency.eyebrow')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-6">
              {t('frequency.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed mb-8">
              <p>{t('frequency.p1')}</p>
              <p>{t('frequency.p2')}</p>
            </div>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="inline-block border-t border-b border-gold-antique/40 py-3 px-6">
              <p className="font-display italic text-lg sm:text-xl text-forest-deep">
                {t('frequency.quote')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          7. PRAKTISCH — Duur, Vergoeding en Registraties
          ======================================================== */}
      <section className="bg-surface-cream/50 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-14">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-3">{t('practical.eyebrow')}</p>
            </FadeIn>
            <FadeIn delay={150}>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-3">
                {t('practical.title')}
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="font-body text-base text-text-soft">
                {t('practical.subtitle')}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eerste Afspraak */}
            <FadeIn delay={100}>
              <div className="border-t border-border-light/80 pt-5">
                <span className="text-xs uppercase font-body tracking-wider text-gold-dark font-semibold block mb-2">
                  {t('practical.firstBadge')}
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-2">
                  {t('practical.firstTitle')}
                </h3>
                <p className="font-display text-lg text-forest-deep/90 mb-3">
                  {t('practical.firstDuration')}
                </p>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('practical.firstDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Vervolgafspraak */}
            <FadeIn delay={200}>
              <div className="border-t border-border-light/80 pt-5">
                <span className="text-xs uppercase font-body tracking-wider text-gold-dark font-semibold block mb-2">
                  {t('practical.followBadge')}
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-2">
                  {t('practical.followTitle')}
                </h3>
                <p className="font-display text-lg text-forest-deep/90 mb-3">
                  {t('practical.followDuration')}
                </p>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('practical.followDesc')}
                </p>
              </div>
            </FadeIn>

            {/* Vergoeding */}
            <FadeIn delay={300}>
              <div className="border-t border-border-light/80 pt-5">
                <span className="text-xs uppercase font-body tracking-wider text-gold-dark font-semibold block mb-2">
                  {t('practical.insuranceBadge')}
                </span>
                <h3 className="font-display text-2xl text-forest-deep mb-2">
                  {t('practical.insuranceTitle')}
                </h3>
                <p className="font-display text-lg text-forest-deep/90 mb-3">
                  {t('practical.insuranceDeductible')}
                </p>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('practical.insuranceDesc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. WANNEER IS ACUPUNCTUUR NIET GESCHIKT? — Verantwoord
          ======================================================== */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={0}>
            <div className="border-l-2 border-gold-antique/60 pl-6 sm:pl-10 space-y-4">
              <p className="eyebrow text-gold-dark">{t('contraindications.eyebrow')}</p>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
                {t('contraindications.title')}
              </h2>
              <div className="space-y-3 font-body text-base text-text-soft leading-relaxed max-w-3xl">
                <p>{t('contraindications.p1')}</p>
                <p>{t('contraindications.p2')}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          9. SLOT & CTA — Diep Donkergroen
          ======================================================== */}
      <section className="bg-forest-deep text-text-light py-20 sm:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <FadeIn delay={0}>
            <span className="font-chinese text-gold text-2xl block mb-3" aria-hidden="true">
              白康
            </span>
            <p className="eyebrow text-gold-light mb-4">{t('finalCta.eyebrow')}</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-6 max-w-2xl mx-auto">
              {t('finalCta.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="font-body text-base sm:text-lg text-text-light-soft leading-relaxed max-w-xl mx-auto mb-10">
              {t('finalCta.desc')}
            </p>
          </FadeIn>
          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-none bg-gold-antique px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-gold hover:shadow-lg"
              >
                {t('finalCta.buttonAppointment')}
              </Link>
              <Link
                href="/klachten"
                className="w-full sm:w-auto rounded-none border border-text-light/30 px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light transition-all hover:bg-white/5"
              >
                {t('finalCta.buttonComplaints')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}