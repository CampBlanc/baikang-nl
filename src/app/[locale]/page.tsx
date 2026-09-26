import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import StorySection from '@/components/StorySection';

export default function HomePage() {
  const tHome = useTranslations('HomePage');
  const tStory = useTranslations('Story');
  const tCommon = useTranslations('Common');

  return (
    <main>
      {/* 1. Hero Sectie met achtergrondfoto */}
      <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-6 py-24 text-center">
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
          {/* Subtiel donker/groen verloop voor tekstcontrast */}
          <div className="absolute inset-0 bg-forest-deep/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-black/20" />
        </div>

        {/* Contentkaart in het midden */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-border-light bg-ivory/90 p-8 shadow-2xl backdrop-blur-md sm:p-14">
          <span className="mb-2 block font-chinese text-2xl text-gold">白康</span>
          <p className="eyebrow mb-3 text-gold-antique">{tHome('badge')}</p>
          <h1 className="font-display text-4xl leading-tight text-forest-deep sm:text-6xl">
            {tHome('heroTitle')}
          </h1>
          <div className="divider-gold mx-auto my-6" />
          <p className="font-body text-base leading-relaxed text-text-soft sm:text-lg">
            {tHome('heroText')}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-forest px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-text-light shadow-md transition-all hover:bg-forest-dark sm:w-auto"
            >
              {tCommon('bookAppointment')}
            </Link>
            <Link
              href="/diensten"
              className="w-full rounded-full border border-forest/30 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:bg-forest/5 sm:w-auto"
            >
              {tStory('acupuncture.button')}
            </Link>
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