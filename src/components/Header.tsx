'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const tNav = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchLocale = (nextLocale: 'nl' | 'en') => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:py-4">
        
        {/* Logo / Merknaam met Yin-Yang beeldmerk */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="Bai Kang Home"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-gold-antique/30 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/Bai-Kang-Yin-Yang.png"
              alt="Bai Kang Yin Yang Logo"
              fill
              sizes="44px"
              priority
              className="object-cover"
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-forest-deep transition-colors group-hover:text-forest">
            Bai Kang
          </span>
        </Link>

        {/* Desktop Navigatie */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('home')}
          </Link>
          <Link href="/diensten" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('services')}
          </Link>
          <Link href="/laseracupunctuur" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('laserAcupuncture')}
          </Link>
          <Link href="/prijzen" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('pricing')}
          </Link>
          <Link href="/over-mij" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('about')}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-text-soft hover:text-forest transition-colors">
            {tNav('contact')}
          </Link>
        </nav>

        {/* Rechterzijde: Taalschakelaar + CTA */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Taalschakelaar */}
          <div className="flex items-center rounded-full border border-border-light bg-surface-cream/50 p-1 text-xs font-semibold">
            <button
              onClick={() => switchLocale('nl')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === 'nl' 
                  ? 'bg-forest text-text-light shadow-sm' 
                  : 'text-text-soft hover:text-forest'
              }`}
            >
              NL
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === 'en' 
                  ? 'bg-forest text-text-light shadow-sm' 
                  : 'text-text-soft hover:text-forest'
              }`}
            >
              EN
            </button>
          </div>

          {/* Primaire CTA knop */}
          <Link
            href="/contact"
            className="rounded-full bg-forest px-5 py-2.5 text-xs font-semibold text-text-light shadow-sm hover:bg-forest-dark transition-colors"
          >
            {tCommon('bookAppointment')}
          </Link>
        </div>

        {/* Mobiel Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center rounded-full border border-border-light bg-surface-cream/50 p-0.5 text-xs font-semibold">
            <button
              onClick={() => switchLocale('nl')}
              className={`rounded-full px-2 py-0.5 ${locale === 'nl' ? 'bg-forest text-text-light' : 'text-text-soft'}`}
            >
              NL
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`rounded-full px-2 py-0.5 ${locale === 'en' ? 'bg-forest text-text-light' : 'text-text-soft'}`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-forest focus:outline-none p-1"
            aria-label="Menu openen"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiele dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-border-light bg-ivory px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('home')}
            </Link>
            <Link href="/diensten" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('services')}
            </Link>
            <Link href="/laseracupunctuur" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('laserAcupuncture')}
            </Link>
            <Link href="/prijzen" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('pricing')}
            </Link>
            <Link href="/over-mij" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('about')}
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-text-soft hover:text-forest py-1 font-medium">
              {tNav('contact')}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-full bg-forest hover:bg-forest-dark px-4 py-2.5 text-sm font-semibold text-text-light transition-colors"
            >
              {tCommon('bookAppointment')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}