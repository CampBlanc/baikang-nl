import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import RecognitionSection from '@/components/RecognitionSection';
import HelpSection from '@/components/HelpSection';
import LaserAcupunctureSection from '@/components/LaserAcupunctureSection';

export default function HomePage() {
  const tHome = useTranslations('HomePage');
  const tPhilosophy = useTranslations('Philosophy');
  const tCommon = useTranslations('Common');

  return (
    <main>
      {/* 1. HERO SECTIE */}
      <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden py-16">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-homepage.png"
            alt="Bai Kang TCM Praktijk met acupunctuurnaalden en kruidenthee"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-dark/15 mix-blend-multiply" />
        </div>

        <div className="mx-auto flex w-full max-w-[1600px] justify-end px-6 sm:px-10 lg:pr-8 xl:pr-12">
          <div className="flex w-full max-w-[650px] flex-col rounded-none border border-border-light/60 bg-ivory/80 p-9 text-center shadow-2xl backdrop-blur-md sm:p-14 lg:p-16 lg:translate-x-6 xl:translate-x-10">
            <div className="space-y-3">
              <span className="font-chinese text-2xl sm:text-3xl tracking-widest text-gold block">
                白康
              </span>
              <p className="eyebrow text-gold-dark text-xs sm:text-sm">
                {tHome('badge')}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] text-forest-deep">
                {tHome('heroTitle')}
              </h1>
              <p className="font-display italic text-lg sm:text-xl text-forest-deep/85 pt-1">
                {tHome('heroSubtitle')}
              </p>
            </div>

            <div className="my-7 h-px w-full bg-border-light/60" />

            <div className="space-y-3">
              <span className="font-chinese text-2xl sm:text-3xl text-forest-deep tracking-wider block">
                {tPhilosophy('characters')}
              </span>
              <p className="font-body text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-earth">
                {tPhilosophy('pinyin')}
              </p>

              <div className="flex items-center justify-center gap-3 py-1">
                <span className="h-px w-10 bg-gold-antique/40" />
                <span className="font-chinese text-gold-antique text-sm">☯</span>
                <span className="h-px w-10 bg-gold-antique/40" />
              </div>

              <p className="font-display italic text-base sm:text-lg text-forest-deep leading-relaxed max-w-lg mx-auto">
                “{tHome('quoteText')}”
              </p>
            </div>

            <div className="my-7 h-px w-full bg-border-light/60" />

            <div>
              <p className="font-body text-xs sm:text-sm leading-relaxed text-text-soft max-w-lg mx-auto mb-8">
                {tHome('heroText')}
              </p>

              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-block rounded-none bg-forest px-10 py-4 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
                >
                  {tCommon('bookAppointment')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERKENNING */}
      <RecognitionSection />

      {/* 3. WAARMEE KAN IK HELPEN? */}
      <HelpSection />

      {/* 4. LASERACUPUNCTUUR (Nieuw split blok) */}
      <LaserAcupunctureSection />
    </main>
  );
}