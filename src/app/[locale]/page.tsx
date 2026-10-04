import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AtmosphericImage from '@/components/AtmosphericImage';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import AtmosphericBlossom from '@/components/AtmosphericBlossom';
import BambooWatermark from '@/components/BambooWatermark';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="bg-ivory selection:bg-gold-antique/30">
      
      {/* 1. HERO — Bloesemtak: 15% mobiel, 20% tablet, 100% desktop */}
      <section className="relative overflow-hidden w-full border-b border-border-light/30">
        <AtmosphericBlossom 
          position="top-right" 
          opacity="opacity-15 md:opacity-20 xl:opacity-100"
        />

        <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-18 max-w-4xl mx-auto text-center">
          <p className="eyebrow text-gold-dark mb-4 tracking-widest uppercase">
            {t('Hero.badge')}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.12] text-forest-deep mb-5 max-w-3xl">
            {t('Hero.title')}
          </h1>
          <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl mx-auto mb-8">
            {t('Hero.intro')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 items-center justify-center w-full sm:w-auto">
            <Link
              href="/klachten"
              className="w-full sm:w-auto rounded-none border border-forest-deep px-7 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep text-center transition-all hover:bg-forest-deep/5"
            >
              {t('Hero.ctaHelp')} →
            </Link>
            <a
              href="https://witkampwellness.clientomgeving.nl/afspraak-maken"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-none bg-forest-deep px-7 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light text-center shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
            >
              {t('Hero.ctaAppointment')}
            </a>
          </div>
        </div>
      </section>

      {/* 2. WAARMEE KAN IK HELPEN? — Rustige achtergrond zonder afleiding */}
      <section id="klachten" className="bg-surface-cream border-t border-border-light/40 px-6 py-24 lg:px-16 scroll-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow text-gold-dark mb-4">{t('Issues.badge')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-6">
              {t('Issues.title')}
            </h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed">
              {t('Issues.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-16">
            {['Pain', 'Stress', 'Energy', 'Digestion', 'Gender', 'Smoking'].map((cat) => (
              <div key={cat} className="border-t border-border-light/60 pt-6">
                <h3 className="font-display text-2xl text-forest-deep mb-3">
                  {t(`Issues.cat${cat}`)}
                </h3>
                <p className="font-body text-text-soft leading-relaxed">
                  {t(`Issues.cat${cat}Desc`)}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/klachten"
            className="group inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors"
          >
            <span className="border-b border-forest-deep/25 pb-1 group-hover:border-gold-antique transition-colors">
              {t('Issues.cta')}
            </span>
            <span className="transition-transform group-hover:translate-x-1.5" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* 3. OVER PATRICK — Bamboemotief en portret */}
      <section className="relative overflow-hidden bg-ivory border-t border-border-light/40 px-6 py-24 lg:px-16">
        <AtmosphericBamboo 
          variant="stick-leaves" 
          position="center-right-mobile-left-desktop" 
          opacity="opacity-10 lg:opacity-20"
        />

        <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative w-full max-w-md mx-auto">
            <AtmosphericImage
              src="/images/patrick-portret.png" 
              alt="Patrick Witkamp - Acupuncturist bij Bai Kang"
              aspectRatio="4/5"
              variant="editorial-portrait"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <p className="eyebrow text-gold-dark">{t('About.badge')}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep leading-tight">
              {t('About.title')}
            </h2>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold-antique">
              {t('About.subtitle')}
            </p>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-lg">
              {t('About.intro')}
            </p>
            <div className="pt-4">
              <Link
                href="/over-patrick"
                className="group inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors"
              >
                <span className="border-b border-forest-deep/25 pb-1 group-hover:border-gold-antique transition-colors">
                  {t('About.cta')}
                </span>
                <span className="transition-transform group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EINDBANNER — Donkergroen vlak met gouden bamboe-accent */}
      <section className="relative overflow-hidden bg-forest-deep px-6 pt-24 pb-16 lg:pt-32 lg:pb-20 text-center border-t-4 border-gold-antique">
        <BambooWatermark 
          variant="cluster" 
          position="bottom-right" 
          opacity="opacity-[0.06]" 
          className="text-gold-antique translate-x-12 translate-y-12 scale-90"
        />

        <div className="relative z-10 mx-auto max-w-3xl lg:max-w-5xl space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-5xl text-ivory leading-tight lg:whitespace-nowrap">
            {t('FinalCTA.title')}
          </h2>
          <p className="font-body text-lg sm:text-xl text-ivory/80 italic mb-8 max-w-2xl mx-auto">
            &ldquo;{t('FinalCTA.intro')}&rdquo;
          </p>
          <div className="pt-2">
            <a
              href="https://witkampwellness.clientomgeving.nl/afspraak-maken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-none bg-gold-antique px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-ivory hover:shadow-lg"
            >
              {t('FinalCTA.cta')} →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}