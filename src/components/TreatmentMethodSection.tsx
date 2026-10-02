import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AtmosphericImage from '@/components/AtmosphericImage';

export default function TreatmentMethodSection() {
  const t = useTranslations('TreatmentMethod');

  return (
    <section 
      aria-labelledby="treatment-method-heading"
      className="bg-ivory border-t border-border-light/60 py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 1. Tekstgedeelte (links op desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="eyebrow text-gold-antique">
              {t('eyebrow')}
            </p>

            <h2 
              id="treatment-method-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-[1.2]"
            >
              {t('title')}
            </h2>

            {/* Subtiel Chinees anker (Xīn = Hart/Aandacht) */}
            <div className="flex items-center gap-3 py-1">
              <span className="h-px w-10 bg-gold-antique/40" />
              <span className="font-chinese text-gold-antique text-base" aria-hidden="true">
                心
              </span>
              <span className="h-px w-10 bg-gold-antique/40" />
            </div>

            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
            </div>

            <div className="pt-2">
              <Link
                href="/over-mij"
                className="group inline-flex items-center gap-2 border-b border-forest-deep/25 pb-1 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep transition-colors hover:border-gold-antique hover:text-gold-antique"
              >
                <span>{t('cta')}</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* 2. Beeldgedeelte via AtmosphericImage (rechts op desktop) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <AtmosphericImage
                src="/images/intake-luisteren.png"
                alt="Persoonlijke intake en luisteren naar de patiënt bij Bai Kang TCM"
                variant="atmospheric-editorial"
                aspectRatio="4/5"
                objectPosition="center 25%"
                hasBorder
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}