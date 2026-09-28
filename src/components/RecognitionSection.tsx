import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function RecognitionSection() {
  const t = useTranslations('Recognition');

  return (
    <section
      aria-labelledby="recognition-heading"
      className="bg-ivory py-24 sm:py-32 lg:py-40 px-6 sm:px-8"
    >
      <div className="mx-auto max-w-xl text-center">
        {/* Eyebrow */}
        <p className="eyebrow text-gold-dark mb-4">
          {t('eyebrow')}
        </p>

        {/* Heading: op mobiel max 3 regels door max-w-md en gecontroleerde regelhoogte */}
        <h2
          id="recognition-heading"
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-forest-deep leading-snug sm:leading-tight max-w-md mx-auto"
        >
          {t('title')}
        </h2>

        {/* Subtiel goud scheidingslijntje */}
        <div className="divider-gold mx-auto my-8" />

        {/* Bodytekst: 4 korte, ademende alinea's */}
        <div className="space-y-6 font-body text-base sm:text-lg leading-relaxed text-text-soft">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>
          <p>{t('paragraph4')}</p>
        </div>

        {/* Subtiele, redactionele CTA (visueel ondergeschikt aan de hero-knop) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/diensten"
            className="group inline-flex items-center gap-2 border-b border-forest-deep/25 pb-1 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep transition-all hover:border-gold-antique hover:text-gold-antique"
          >
            <span>{t('cta')}</span>
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}