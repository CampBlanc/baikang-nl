import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function PhilosophySection() {
  const t = useTranslations('Philosophy');

  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden py-16 px-6 sm:px-12 lg:px-20">
      {/* 1. Schone achtergrondafbeelding */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/tcm-filosofie.jpg"
          alt="Acupunctuurnaalden op houten schaal met theekop en voorjaarsbloesem"
          fill
          className="object-cover object-[30%_center] lg:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-dark/10 mix-blend-multiply" />
      </div>

      {/* 2. Kaart rechts in het zonlicht */}
      <div className="mx-auto flex w-full max-w-7xl justify-end">
        <div className="w-full max-w-lg rounded-none border border-border-light/40 bg-ivory/70 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">
          
          {/* Chinese karakters */}
          <span className="font-chinese text-2xl sm:text-3xl lg:text-[2.2rem] text-forest-deep tracking-wider block">
            {t('characters')}
          </span>

          {/* Pinyin */}
          <p className="font-body text-[0.7rem] uppercase tracking-[0.25em] text-text-muted mt-2">
            {t('pinyin')}
          </p>

          {/* Yin-Yang ornament / gouden scheidingslijn */}
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-gold-antique/50" />
            <span className="font-chinese text-gold-antique text-sm">☯</span>
            <span className="h-[1px] w-10 bg-gold-antique/50" />
          </div>

          {/* De spreuk */}
          <div className="space-y-1">
            <p className="font-display italic text-lg sm:text-xl text-forest-deep leading-relaxed">
              &ldquo;{t('line1')}
            </p>
            <p className="font-display italic text-lg sm:text-xl text-forest-deep leading-relaxed">
              {t('line2')}&rdquo;
            </p>
          </div>

          {/* Uitleg */}
          <p className="font-body text-xs sm:text-sm text-text-soft leading-relaxed mt-5">
            {t('explanation')}
          </p>

          {/* Knop */}
          <div className="mt-8">
            <Link
              href="/over-mij"
              className="inline-block rounded-none border border-forest/30 px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-forest hover:text-text-light"
            >
              {t('button')}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}