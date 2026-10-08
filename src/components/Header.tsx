'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';

export default function Header() {
  const tCommon = useTranslations('Common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const switchLocale = (nextLocale: 'nl' | 'en') => {
    router.replace(pathname, { locale: nextLocale });
  };

  const isNl = locale === 'nl';

  // Veilige CTA knoptekst
  let appointmentLabel = isNl ? 'Afspraak maken' : 'Book appointment';
  try {
    const raw = tCommon('bookAppointment');
    if (raw && !raw.startsWith('Common.')) appointmentLabel = raw;
  } catch {
    // Gebruik fallback
  }

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      children: null,
    },
    {
      id: 'complaints',
      label: isNl ? 'Klachten' : 'Symptoms',
      href: '/klachten',
      children: [
        { label: isNl ? 'Pijn & spanning' : 'Pain & tension', href: '/klachten#pijn' },
        { label: isNl ? 'Stress & slaap' : 'Stress & sleep', href: '/klachten#stress' },
        { label: isNl ? 'Energie & herstel' : 'Energy & recovery', href: '/klachten#energie' },
        { label: isNl ? 'Maag & darmen' : 'Stomach & digestion', href: '/klachten#maag-darmen' },
        { label: isNl ? 'Vrouw & man' : 'Women & men', href: '/klachten#vrouw-man' },
        { label: isNl ? 'Stoppen met roken & vapen' : 'Quitting smoking & vaping', href: 'https://rookvrij.nu' },
      ],
    },
    {
      id: 'acupuncture',
      label: isNl ? 'Acupunctuur' : 'Acupuncture',
      href: '/acupunctuur',
      children: [
        { label: isNl ? 'Wat is acupunctuur?' : 'What is acupuncture?', href: '/acupunctuur' },
        { label: isNl ? 'Traditionele Chinese Geneeskunde' : 'Traditional Chinese Medicine', href: '/acupunctuur#tcm' },
        { label: isNl ? 'Laseracupunctuur' : 'Laser acupuncture', href: '/acupunctuur#laseracupunctuur' },
      ],
    },
    {
      id: 'method',
      label: isNl ? 'Methode' : 'Method',
      href: '/methode',
      children: [
        { label: isNl ? 'Mijn werkwijze' : 'My approach', href: '/methode' },
        { label: isNl ? 'Aanvullende behandelvormen' : 'Complementary therapies', href: '/methode#aanvullend' },
        { label: 'Cupping', href: '/behandelvormen/cupping' },
        { label: 'Guasha', href: '/behandelvormen/guasha' },
        { label: 'Reiki', href: '/behandelvormen/reiki' },
        { label: isNl ? 'Tarieven & vergoedingen' : 'Rates & reimbursements', href: '/tarieven' },
      ],
    },
    {
      id: 'faq',
      label: isNl ? 'Vragen' : 'FAQ',
      href: '/vragen',
      children: null,
    },
    {
      id: 'about',
      label: isNl ? 'Over mij' : 'About me',
      href: '/over-patrick',
      children: null,
    },
  ];

  const isItemActive = (href: string) => {
    if (href === '/') return pathname === '/';
    // Behandelvorm-pagina's horen bij het menu-item Methode
    if (href === '/methode' && pathname.includes('/behandelvormen/')) return true;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="Bai Kang Home"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-gold-antique/30 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/Bai-Kang-Yin-Yang.png"
              alt="Bai Kang Logo"
              fill
              sizes="44px"
              priority
              className="object-cover"
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-forest-deep transition-colors group-hover:text-forest">
            Bái Kāng
          </span>
        </Link>

        {/* Desktop Navigatie met Dropdowns */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isItemActive(item.href);

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveDropdown(null)}
                  className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors hover:text-forest-deep ${
                    active ? 'text-forest-deep font-semibold' : 'text-text-soft'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <svg className="h-3.5 w-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.id && (
                  <div className="absolute left-0 top-full min-w-[250px] border border-border-light bg-ivory py-2 shadow-lg z-50">
                    {item.children.map((sub) => {
                      const isExternal = sub.href.startsWith('http');
                      if (isExternal) {
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between px-5 py-2.5 text-xs font-medium text-text-soft hover:bg-surface-cream hover:text-forest-deep transition-colors"
                          >
                            <span>{sub.label}</span>
                            <span className="text-[10px] text-gold-antique" aria-hidden="true">↗</span>
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-5 py-2.5 text-xs font-medium text-text-soft hover:bg-surface-cream hover:text-forest-deep transition-colors"
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Rechterzijde: Taal + Afspraak Knop */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center rounded-full border border-border-light bg-surface-cream/50 p-1 text-xs font-semibold">
            <button
              onClick={() => switchLocale('nl')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === 'nl' 
                  ? 'bg-forest-deep text-text-light shadow-sm' 
                  : 'text-text-soft hover:text-forest-deep'
              }`}
            >
              NL
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                locale === 'en' 
                  ? 'bg-forest-deep text-text-light shadow-sm' 
                  : 'text-text-soft hover:text-forest-deep'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="https://witkampwellness.clientomgeving.nl/afspraak-maken"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none bg-forest-deep px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm hover:bg-forest-dark transition-all"
          >
            {appointmentLabel}
          </a>
        </div>

        {/* Mobiel menu knoppen */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center rounded-full border border-border-light bg-surface-cream/50 p-0.5 text-xs font-semibold">
            <button
              onClick={() => switchLocale('nl')}
              className={`rounded-full px-2 py-0.5 ${locale === 'nl' ? 'bg-forest-deep text-text-light' : 'text-text-soft'}`}
            >
              NL
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`rounded-full px-2 py-0.5 ${locale === 'en' ? 'bg-forest-deep text-text-light' : 'text-text-soft'}`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-forest-deep focus:outline-none p-1"
            aria-label="Menu"
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
        <div className="border-t border-border-light bg-ivory px-6 py-5 lg:hidden max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-1 ${
                    isItemActive(item.href) ? 'text-forest-deep font-semibold' : 'text-forest-deep'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-border-light pl-3 mt-1 gap-2">
                    {item.children.map((sub) => {
                      const isExternal = sub.href.startsWith('http');
                      if (isExternal) {
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between text-xs text-text-soft py-1 hover:text-forest-deep"
                          >
                            <span>{sub.label}</span>
                            <span className="text-[10px] text-gold-antique" aria-hidden="true">↗</span>
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs text-text-soft py-1 hover:text-forest-deep"
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://witkampwellness.clientomgeving.nl/afspraak-maken"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-none bg-forest-deep py-3 text-center text-xs font-semibold uppercase tracking-widest text-text-light hover:bg-forest-dark transition-colors"
            >
              {appointmentLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}