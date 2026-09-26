import { useTranslations } from 'next-intl';
import StorySection from '@/components/StorySection';

export default function HomePage() {
  const tHome = useTranslations('HomePage');
  const tStory = useTranslations('Story');

  return (
    <main>
      {/* Introductie Hero */}
      <section className="bg-surface-cream py-24 px-6 text-center">
        <span className="font-chinese text-gold text-2xl block mb-2">白康</span>
        <p className="eyebrow text-gold-dark mb-4">{tHome('badge')}</p>
        <h1 className="font-display text-4xl sm:text-6xl text-forest-deep max-w-3xl mx-auto leading-tight">
          {tHome('heroTitle')}
        </h1>
        <p className="mt-6 text-text-soft max-w-2xl mx-auto text-base sm:text-lg">
          {tHome('heroText')}
        </p>
      </section>

      {/* Story 1: Acupunctuur (kaart rechts) */}
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

      {/* Story 2: Laseracupunctuur (kaart links) */}
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