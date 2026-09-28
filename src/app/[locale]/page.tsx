import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import RecognitionSection from '@/components/RecognitionSection';
import HelpSection from '@/components/HelpSection';

export default function HomePage() {
  const tHome = useTranslations('HomePage');
  const tPhilosophy = useTranslations('Philosophy');
  const tCommon = useTranslations('Common');

  return (
    <main>
      {/* 1. HERO SECTIE */}
      <section className="relative flex min-h-[95vh] w-full items-center overflow-hidden py-16">
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

        <div className="mx-auto flex w-full max-w-7xl justify-end px-6 sm:px-10 lg:px-16">
          <div className="flex w-full max-w-[710px] min-h-[600px] flex-col justify-between rounded-none border border-border-light/50 bg-ivory/75 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12 lg:p-16 lg:translate-x-14">
            <div className="space-y-3">
              <span className="font-chinese text-3xl tracking-widest text-gold block">
                白康
              </span>
              <p className="eyebrow text-gold-dark">
                {tHome('badge')}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-forest-deep">
                {tHome('heroTitle')}
              </h1>
            </div>

            <div className="my-7 border-y border-gold-antique/30 py-6 bg-ivory-warm/35">
              <p className="font-chinese text-2xl sm:text-3xl lg:text-[2.25rem] text-forest-deep tracking-wider">
                {tPhilosophy('characters')}
              </p>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-text-muted mt-2">
                {tPhilosophy('pinyin')}
              </p>

              <div className="my-4 flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-gold-antique/40" />
                <span className="font-chinese text-gold-antique text-sm">☯</span>
                <span className="h-[1px] w-12 bg-gold-antique/40" />
              </div>

              <p className="font-display italic text-lg sm:text-xl lg:text-[1.35rem] text-forest-deep leading-snug">
                &ldquo;{tPhilosophy('line1')} {tPhilosophy('line2')}&rdquo;
              </p>
            </div>

            <p className="font-body text-sm sm:text-base leading-relaxed text-text-soft max-w-lg mx-auto mb-8">
              {tHome('heroText')}
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-none bg-forest px-9 py-4 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-text-light shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
              >
                {tCommon('bookAppointment')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERKENNING */}
      <RecognitionSection />

      {/* 3. WAARMEE KAN IK HELPEN? (Nieuw blok) */}
      <HelpSection />
    </main>
  );
}