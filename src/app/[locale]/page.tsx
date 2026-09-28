import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import StorySection from '@/components/StorySection';

export default function HomePage() {
  const tHome = useTranslations('HomePage');
  const tCommon = useTranslations('Common');
  const tStory = useTranslations('Story');

  return (
    <main>
      {/* 1. Hero Sectie met de bijgewerkte tekststructuur op de kaart */}
      <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden py-16 lg:py-24">
        {/* Achtergrondafbeelding */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-homepage.png"
            alt="Bai Kang TCM Praktijk"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest-dark/15 mix-blend-multiply" />
        </div>

        {/* Positiecontainer: rechts in het warme licht */}
        <div className="mx-auto flex w-full max-w-[1600px] justify-end px-6 sm:px-10 lg:pr-8 xl:pr-12">
          
          {/* De Kaart */}
          <div className="flex w-full max-w-[650px] flex-col rounded-none border border-border-light/60 bg-ivory/80 p-9 text-center shadow-2xl backdrop-blur-md sm:p-14 lg:p-16 lg:translate-x-6 xl:translate-x-10">
            
            {/* 1. 白康 / Subtitel / Hoofdtitel / Vraagstelling */}
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

            {/* Dunne scheidingslijn */}
            <div className="my-7 h-px w-full bg-border-light/60" />

            {/* 2. Chinese wijsheid, Pinyin, Yin-Yang en vertaling */}
            <div className="space-y-3">
              <span className="font-chinese text-2xl sm:text-3xl text-forest-deep tracking-wider block">
                痛则不通，不通则痛
              </span>
              <p className="font-body text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-earth">
                Tòng zé bù tōng, bù tōng zé tòng
              </p>

              {/* Yin-Yang ornament met gouden lijntjes */}
              <div className="flex items-center justify-center gap-3 py-1">
                <span className="h-px w-10 bg-gold-antique/40" />
                <span className="font-chinese text-gold-antique text-sm">☯</span>
                <span className="h-px w-10 bg-gold-antique/40" />
              </div>

              {/* Aangepaste vertaling */}
              <p className="font-display italic text-base sm:text-lg text-forest-deep leading-relaxed max-w-lg mx-auto">
                “{tHome('quoteText')}”
              </p>
            </div>

            {/* Dunne scheidingslijn */}
            <div className="my-7 h-px w-full bg-border-light/60" />

            {/* 3. Toelichting en actieknop */}
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

      {/* 2. Storytelling Sectie 1: Acupunctuur */}
      <StorySection
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=80"
        imageAlt={tStory('acupuncture.alt')}
        eyebrow={tStory('acupuncture.eyebrow')}
        title={tStory('acupuncture.title')}
        description={tStory('acupuncture.description')}
        buttonText={tStory('acupuncture.button')}
        buttonHref="/diensten"
        align="right"
      />

      {/* 3. Storytelling Sectie 2: Laseracupunctuur */}
      <StorySection
        imageSrc="https://images.unsplash.com/photo-1512290900672-1f02adc6764b?auto=format&fit=crop&w=1800&q=80"
        imageAlt={tStory('laser.alt')}
        eyebrow={tStory('laser.eyebrow')}
        title={tStory('laser.title')}
        description={tStory('laser.description')}
        buttonText={tStory('laser.button')}
        buttonHref="/laseracupunctuur"
        align="left"
      />
    </main>
  );
}