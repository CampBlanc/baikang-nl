import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function LaserAcupunctureSection() {
  const t = useTranslations('LaserAcupuncture');

  return (
    <section className="relative flex flex-col lg:flex-row w-full min-h-[75vh] bg-ivory border-t border-border-light/40 overflow-hidden">
      
      {/* Linkergedeelte: Tekstvlak (Rustig, geen kaders, vloeit over in de ivoor basis) */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-8 py-16 sm:px-14 lg:px-24 xl:px-28 order-2 lg:order-1">
        
        <p className="eyebrow text-gold-antique mb-4">
          {t('eyebrow')}
        </p>
        
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-forest-deep leading-tight">
          {t('title')}
        </h2>

        <div className="h-px w-16 bg-gold-antique/40 my-7" />

        <div className="mb-6">
          <span className="font-chinese text-gold-antique/70 text-2xl block">光</span> 
        </div>

        <div className="space-y-6 font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-lg">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
        </div>

        <div className="mt-12">
          <Link
            href="/laseracupunctuur"
            className="inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors group"
          >
            <span className="border-b border-forest-deep/25 pb-1 group-hover:border-gold-antique transition-colors">
              {t('cta')}
            </span>
            <span className="transition-transform group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Rechtergedeelte: Fotovlak (Volledige hoogte) */}
      <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[75vh] order-1 lg:order-2">
        <Image
          src="/images/laser-behandeling.jpg"
          alt="Precisie laseracupunctuur behandeling"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-forest-dark/10 mix-blend-multiply" />
      </div>

    </section>
  );
}