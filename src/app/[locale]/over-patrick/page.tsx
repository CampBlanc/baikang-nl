import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import FadeIn from '@/components/FadeIn';
import AtmosphericBlossom from '@/components/AtmosphericBlossom';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutMe.Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function OverMijPage() {
  const t = useTranslations('AboutMe');

  return (
    <main className="bg-ivory text-text selection:bg-gold-antique/30 overflow-hidden">

      {/* =======================================================================
          1. HERO — Direct persoonlijk & liggend kantoorportret in kleur
          ======================================================================= */}
      <section className="relative border-b border-border-light/40 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        
        {/* Chinese perzikbloesem rechtsboven */}
        <AtmosphericBlossom
          position="top-right"
          flip={false}
          opacity="opacity-80 lg:opacity-100"
          className="-translate-y-2 translate-x-2 lg:translate-x-4"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Tekstzijde Links (6 van de 12 kolommen) */}
            <div className="lg:col-span-6 space-y-6">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark">
                  {t('Hero.badge')}
                </p>
              </FadeIn>

              <FadeIn delay={150}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl text-forest-deep leading-[1.15]">
                  {t('Hero.title')}
                </h1>
              </FadeIn>

              <FadeIn delay={250}>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
              </FadeIn>

              <FadeIn delay={300}>
                <p className="font-body text-lg sm:text-xl text-forest-deep/90 font-medium leading-relaxed">
                  {t('Hero.lead')}
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>{t('Hero.paragraph1')}</p>
                  <p>{t('Hero.paragraph2')}</p>
                </div>
              </FadeIn>
            </div>

            {/* Liggend Portret Rechts met patrick-office.png in 16:10 landscape */}
            <div className="lg:col-span-6">
              <FadeIn delay={200} direction="up">
                <div className="relative aspect-[16/10] sm:aspect-[3/2] w-full max-w-xl mx-auto border border-border-light/60 p-3 bg-surface-cream/50 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/patrick-office.png"
                      alt="Patrick Witkamp in zijn praktijk - Bai Kang TCM"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          2. GROTE TYPOGRAFISCHE OVERGANG — Hoofdstuktitel
          ======================================================================= */}
      <section className="bg-surface-cream/40 py-20 sm:py-28 px-6 text-center border-b border-border-light/40">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep leading-tight mb-4">
              {t('Transition.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-antique">
              {t('Transition.route')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* =======================================================================
          3. RUIM 25 JAAR ONDERWEG — Editorial Spread
          ======================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Groot grafisch getal links */}
            <div className="lg:col-span-4 border-l-2 border-gold-antique/60 pl-6 sm:pl-8">
              <FadeIn delay={0}>
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl text-gold-antique block leading-none mb-2">
                  25+
                </span>
                <span className="font-body text-xs sm:text-sm uppercase tracking-widest font-semibold text-forest-deep block">
                  {t('Journey.statLabel')}
                </span>
                <p className="font-body text-sm text-text-soft mt-4 leading-relaxed">
                  {t('Journey.statSub')}
                </p>
              </FadeIn>
            </div>

            {/* Inhoudelijke tekst rechts */}
            <div className="lg:col-span-8 space-y-6 font-body text-base sm:text-lg text-text-soft leading-relaxed">
              <FadeIn delay={150}>
                <h3 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                  {t('Journey.title')}
                </h3>
              </FadeIn>
              <FadeIn delay={200}>
                <p>{t('Journey.p1')}</p>
              </FadeIn>
              <FadeIn delay={250}>
                <p>{t('Journey.p2')}</p>
              </FadeIn>
              <FadeIn delay={300}>
                <blockquote className="border-l border-gold-antique/70 pl-5 italic font-display text-xl sm:text-2xl text-forest-deep py-1">
                  “{t('Journey.quote')}”
                </blockquote>
              </FadeIn>
              <FadeIn delay={350}>
                <p>{t('Journey.p3')}</p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          4. EEN BEELD DAT BLEEF HANGEN — Het Visuele Rustpunt
          ======================================================================= */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-ivory border-b border-border-light/40 overflow-hidden">
        
        {/* Bloesemtak ontspringt vanuit linksonder en waaiert naar rechtsboven uit */}
        <AtmosphericBlossom
          position="bottom-left"
          rotate="rotate-180"
          flip={false}
          opacity="opacity-25 sm:opacity-30 lg:opacity-45"
          className="translate-y-10 -translate-x-6 sm:translate-y-14 sm:-translate-x-10"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark">
              {t('Fascination.badge')}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-forest-deep leading-relaxed">
              “{t('Fascination.quote')}”
            </blockquote>
          </FadeIn>

          <FadeIn delay={250}>
            <span className="font-display text-4xl sm:text-5xl text-gold-antique block">
              Tot 2021.
            </span>
          </FadeIn>

          <FadeIn delay={350}>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
              <p>{t('Fascination.p1')}</p>
              <p>{t('Fascination.p2')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =======================================================================
          5. 2021: HET ROER OM — Het Scharnierpunt
          ======================================================================= */}
      <section className="bg-surface-cream/50 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn delay={0}>
              <span className="font-display text-2xl text-gold-antique block mb-1">
                2021
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-4">
                {t('Turnaround.title')}
              </h2>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('Turnaround.intro')}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={150}>
              <div className="border-t-2 border-forest-deep/30 pt-6 space-y-3">
                <span className="text-xs font-body uppercase tracking-widest text-gold-dark font-semibold block">
                  {t('Turnaround.beforeLabel')}
                </span>
                <h3 className="font-display text-2xl text-forest-deep">
                  {t('Turnaround.beforeTitle')}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('Turnaround.beforeText')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="border-t-2 border-gold-antique pt-6 space-y-3">
                <span className="text-xs font-body uppercase tracking-widest text-gold-antique font-semibold block">
                  {t('Turnaround.afterLabel')}
                </span>
                <h3 className="font-display text-2xl text-forest-deep">
                  {t('Turnaround.afterTitle')}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {t('Turnaround.afterText')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =======================================================================
          6. MIJN ONTWIKKELING — De Verticale Editorial Tijdlijn
          ======================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-3">{t('Timeline.badge')}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-4">
                {t('Timeline.title')}
              </h2>
              <p className="font-body text-base text-text-soft">
                {t('Timeline.subtitle')}
              </p>
            </FadeIn>
          </div>

          {/* Tijdlijn met gouden aslijn */}
          <div className="relative border-l border-gold-antique/40 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-14">
            
            {/* STAP 1: 2021 */}
            <FadeIn delay={100}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-xl text-gold-antique block mb-1">
                  2021
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                  {t('Timeline.step1Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('Timeline.step1Desc')}
                </p>
              </div>
            </FadeIn>

            {/* STAP 2: QING BAI */}
            <FadeIn delay={150}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-xl text-gold-antique block mb-1">
                  Academie Qing-Bai
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                  {t('Timeline.step2Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('Timeline.step2Desc')}
                </p>
              </div>
            </FadeIn>

            {/* STAP 3: TOTAL HEALTH */}
            <FadeIn delay={200}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-xl text-gold-antique block mb-1">
                  Total Health Academie
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                  {t('Timeline.step3Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('Timeline.step3Desc')}
                </p>
              </div>
            </FadeIn>

            {/* STAP 4: SEPTEMBER 2025 */}
            <FadeIn delay={250}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ivory border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-xl text-gold-antique block mb-1">
                  September 2025
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                  {t('Timeline.step4Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('Timeline.step4Desc')}
                </p>
              </div>
            </FadeIn>

            {/* STAP 5: MEI 2026 */}
            <FadeIn delay={300}>
              <div className="relative">
                <div
                  className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-gold-antique border-2 border-gold-antique"
                  aria-hidden="true"
                />
                <span className="font-display text-xl text-gold-antique font-semibold block mb-1">
                  Mei 2026
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-forest-deep mb-2">
                  {t('Timeline.step5Title')}
                </h3>
                <p className="font-body text-base text-text-soft leading-relaxed max-w-xl">
                  {t('Timeline.step5Desc')}
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* =======================================================================
          7. VISUEEL SCHANIERPUNT — Van interesse naar vak
          ======================================================================= */}
      <section className="bg-surface-cream/30 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 lg:col-span-5">
              <FadeIn delay={150}>
                <div className="relative aspect-[4/3] w-full max-w-lg mx-auto border border-border-light/60 p-3 bg-ivory shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/intake-luisteren.png"
                      alt="Patrick Witkamp tijdens consultatie in de praktijk"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7 space-y-6">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark">{t('Craft.badge')}</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-tight">
                  {t('Craft.title')}
                </h2>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>{t('Craft.p1')}</p>
                  <p>{t('Craft.p2')}</p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
          8. MANIFEST: EERST DE MENS, DAN DE KLACHT
          ======================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-ivory border-b border-border-light/40">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark">{t('Vision.badge')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep leading-tight">
              {t('Vision.title')}
            </h2>
            <div className="w-16 h-px bg-gold-antique/60 mx-auto my-6" aria-hidden="true" />
          </FadeIn>

          <FadeIn delay={150}>
            <p className="font-body text-lg sm:text-xl text-forest-deep font-medium leading-relaxed max-w-2xl mx-auto">
              {t('Vision.lead')}
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed text-left sm:text-center max-w-2xl mx-auto">
              <p>{t('Vision.p1')}</p>
              <div className="py-4 space-y-2 font-display italic text-xl text-forest-deep text-center">
                <p>Aandacht voor het verhaal.</p>
                <p>Aandacht voor het lichaam.</p>
                <p>Aandacht voor wat iemand op dat moment nodig heeft.</p>
              </div>
              <p>{t('Vision.p2')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =======================================================================
          9. BLIJVEN ONTWIKKELEN — Horizontaal Grid & Link naar Methode
          ======================================================================= */}
      <section className="bg-surface-cream/40 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-3">{t('Growth.badge')}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                {t('Growth.title')}
              </h2>
              <p className="font-body text-base text-text-soft leading-relaxed">
                {t('Growth.intro')}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t border-b border-gold-antique/30 py-6 mb-10">
              <div className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-deep">
                {t('Growth.skills.acupuncture')}
              </div>
              <div className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-deep">
                {t('Growth.skills.diagnostics')}
              </div>
              <div className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-deep">
                {t('Growth.skills.ear')}
              </div>
              <div className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-deep">
                {t('Growth.skills.laser')}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="text-center">
              <Link
                href="/methode"
                className="group inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors"
              >
                <span className="border-b border-forest-deep/25 pb-1 group-hover:border-gold-antique transition-colors">
                  {t('Growth.cta')}
                </span>
                <span className="transition-transform group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =======================================================================
          10. HET MERKVERHAAL: BÁI KĀNG (Diep Bosgroen Rustpunt)
          ======================================================================= */}
      <section className="bg-forest-deep text-text-light py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        <div className="mx-auto max-w-5xl relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn delay={0}>
              <span className="font-chinese text-gold text-4xl sm:text-5xl block mb-4" aria-hidden="true">
                白康
              </span>
              <p className="eyebrow text-gold-light mb-2">{t('Brand.eyebrow')}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-4">
                {t('Brand.title')}
              </h2>
              <p className="font-body text-base text-text-light-soft leading-relaxed">
                {t('Brand.intro')}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 border-t border-white/10 pt-12 mb-16">
            
            <FadeIn delay={150}>
              <div className="space-y-3">
                <span className="font-chinese text-gold text-2xl block">白</span>
                <h3 className="font-display text-2xl text-ivory">
                  {t('Brand.baiTitle')}
                </h3>
                <p className="font-body text-sm sm:text-base text-text-light-soft leading-relaxed">
                  {t('Brand.baiDesc')}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="space-y-3">
                <span className="font-chinese text-gold text-2xl block">康</span>
                <h3 className="font-display text-2xl text-ivory">
                  {t('Brand.kangTitle')}
                </h3>
                <p className="font-body text-sm sm:text-base text-text-light-soft leading-relaxed">
                  {t('Brand.kangDesc')}
                </p>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={300}>
            <div className="border border-gold-antique/30 bg-forest-hover/40 p-6 sm:p-8 text-center max-w-xl mx-auto">
              <p className="font-display text-xl sm:text-2xl text-ivory tracking-widest uppercase">
                Rust · Aandacht · Balans
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* =======================================================================
          11. PERSOONLIJKE AFSLUITENDE CTA
          ======================================================================= */}
      <section className="bg-ivory py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-border-light/40">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark">
              Patrick Witkamp
            </p>
            <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-text-muted mt-1">
              Acupuncturist · Bái Kāng TCM
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <blockquote className="font-display italic text-2xl sm:text-3xl lg:text-4xl text-forest-deep leading-relaxed max-w-3xl mx-auto">
              “{t('CtaSection.quote')}”
            </blockquote>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-none bg-forest-deep px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
              >
                {t('CtaSection.button')} →
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

    </main>
  );
}