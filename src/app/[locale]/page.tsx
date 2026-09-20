import { useTranslations } from 'next-intl';

export default function HomePage() {
  const tNav = useTranslations('Navigation');
  const tHome = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900">
        {tHome('title')}
      </h1>
      <p className="mt-4 text-lg text-stone-600">
        {tHome('tagline')}
      </p>
      <div className="mt-6 flex gap-4 text-sm font-medium text-stone-500">
        <span>{tNav('home')}</span>
        <span>•</span>
        <span>{tNav('laserAcupuncture')}</span>
        <span>•</span>
        <span>{tNav('contact')}</span>
      </div>
    </main>
  );
}