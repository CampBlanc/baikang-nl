import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HelpSection() {
  const tHelp = useTranslations('Help');
  const tCommon = useTranslations('Common');

  // Links naar de categorieën op de klachtenpagina (zelfde ankers als in de Header)
  const categories = [
    { id: 'pain', symbol: '痛', href: '/klachten#pijn' },
    { id: 'stress', symbol: '安', href: '/klachten#stress' },
    { id: 'energy', symbol: '气', href: '/klachten#energie' },
    { id: 'digestion', symbol: '化', href: '/klachten#maag-darmen' },
    { id: 'gender', symbol: '和', href: '/klachten#vrouw-man' },
    { id: 'smoking', symbol: '清', href: 'https://rookvrij.nu' },
  ];

  return (
    <section 
      aria-labelledby="help-heading"
      className="bg-surface-cream py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Introductie Header (links uitgelijnd voor redactionele rust) */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <p className="eyebrow text-gold-dark mb-4">
            {tHelp('eyebrow')}
          </p>
          <h2 
            id="help-heading" 
            className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-forest-deep leading-snug sm:leading-tight mb-6"
          >
            {tHelp('title')}
          </h2>
          <div className="w-16 h-px bg-gold-antique mb-6" />
          <p className="font-body text-base sm:text-lg leading-relaxed text-text-soft">
            {tHelp('intro')}
          </p>
        </div>

        {/* Rustig Categorieën Raster (1 kolom mobiel, 2 tablet, 3 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col border-t border-border-light/60 pt-6">
              
              {/* Esthetisch TCM Karakter ipv zware iconen */}
              <span className="font-chinese text-gold text-2xl mb-4 block" aria-hidden="true">
                {cat.symbol}
              </span>
              
              {/* Titel */}
              <h3 className="font-display text-2xl text-forest-deep mb-3">
                {tHelp(`categories.${cat.id}.title`)}
              </h3>
              
              {/* Beschrijving */}
              <p className="font-body text-sm sm:text-base leading-relaxed text-text-soft mb-6 flex-grow">
                {tHelp(`categories.${cat.id}.description`)}
              </p>
              
              {/* Subtiele text-link, ondergeschikt aan de hero */}
              <Link
                href={cat.href}
                className="group inline-flex items-center gap-2 border-b border-transparent pb-1 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep transition-all hover:border-gold-antique hover:text-gold-antique w-fit"
              >
                <span>{tCommon('readMore')}</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}