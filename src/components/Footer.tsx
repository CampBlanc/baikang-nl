import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');

  return (
    <footer className="bg-forest-deep border-t border-gold-antique/20 text-text-light-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
        
        {/* BOVENSTE GEDEELTE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Kolom 1: Bai Kang TCM & Witkamp Wellness */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-chinese text-gold text-2xl tracking-widest block">
              白康
            </span>
            <span className="font-display text-2xl tracking-wide text-ivory block">
              Bai Kang TCM
            </span>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique">
              Witkamp Wellness
            </p>
            <p className="font-body text-sm text-text-light-soft/80 max-w-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Kolom 2: Navigatielinks */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique">
              {t('navigationTitle')}
            </p>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/" className="hover:text-gold-antique transition-colors">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-gold-antique transition-colors">
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link href="/laseracupunctuur" className="hover:text-gold-antique transition-colors">
                  {tNav('laserAcupuncture')}
                </Link>
              </li>
              <li>
                <Link href="/over-mij" className="hover:text-gold-antique transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-antique transition-colors">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Praktijk & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique">
              {t('contactTitle')}
            </p>
            <div className="font-body text-sm space-y-2 text-text-light-soft/80">
              <p className="font-medium text-ivory leading-snug">
                Bai Kang TCM | Witkamp Wellness
              </p>
              <p className="text-text-light-soft/90">Patrick Witkamp</p>
              <p>{t('address')}</p>
              <p>
                <a href="mailto:info@baikang.nl" className="hover:text-gold-antique transition-colors">
                  {t('email')}
                </a>
              </p>
            </div>
          </div>

          {/* Kolom 4: Registraties */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-antique">
              {t('registrationsTitle')}
            </p>
            <div className="font-body text-xs sm:text-sm space-y-1.5 text-text-light-soft/80">
              <p>
                <span className="text-ivory font-medium">{t('kvkLabel')}:</span> 89643771
              </p>
              <p>
                <span className="text-ivory font-medium">{t('vatLabel')}:</span> NL004749930B58
              </p>
              <p>
                <span className="text-ivory font-medium">{t('agbProviderLabel')}:</span> 90122136
              </p>
              <p>
                <span className="text-ivory font-medium">{t('agbPracticeLabel')}:</span> 90097044
              </p>
            </div>
          </div>

        </div>

        {/* MIDDEN: SCHILDJES & GAT-WKKGZ KLACHTENREGELING */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8">
          {/* Schildjes */}
<div className="flex items-center gap-4 shrink-0">
  <div className="relative h-16 w-16 sm:h-20 sm:w-20">
    <Image
      src="/images/CATvirtueelschild.png"
      alt="CAT-therapeut schild"
      fill
      sizes="80px"
      className="object-contain"
    />
  </div>
  <div className="relative h-16 w-16 sm:h-20 sm:w-20">
    <Image
      src="/images/GATVirtueelschild.png"
      alt="GAT Geschilleninstantie schild"
      fill
      sizes="80px"
      className="object-contain"
    />
  </div>
</div>

          <div className="font-body text-xs leading-relaxed text-text-light-soft/75 max-w-4xl">
            <p>
              {t('complaintsText')}{' '}
              <a
                href="https://gatgeschillen.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-antique hover:text-ivory underline underline-offset-2 transition-colors"
              >
                gatgeschillen.nl
              </a>
            </p>
          </div>
        </div>

        {/* ONDERSTE BALK: COPYRIGHT & JURIDISCH */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-body text-xs text-text-light-soft/60">
          <p>© {new Date().getFullYear()} Bai Kang TCM | Witkamp Wellness. {t('rights')}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-antique transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/voorwaarden" className="hover:text-gold-antique transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}