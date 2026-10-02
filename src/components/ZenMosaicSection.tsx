import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface ZenMosaicSectionProps {
  eyebrow: string;
  title: string;
  hanziCharacter?: string;
  paragraphs: string[];
  ctaText: string;
  ctaHref: string;
  mainImageSrc: string;
  mainImageAlt: string;
  detailImageSrc: string;
  detailImageAlt: string;
  reverse?: boolean; // Hiermee wissel je eenvoudig beeld links en tekst rechts
}

export default function ZenMosaicSection({
  eyebrow,
  title,
  hanziCharacter = '光',
  paragraphs,
  ctaText,
  ctaHref,
  mainImageSrc,
  mainImageAlt,
  detailImageSrc,
  detailImageAlt,
  reverse = false,
}: ZenMosaicSectionProps) {
  return (
    <section className="bg-ivory py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden border-t border-border-light/40">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 1. TEKSTKOLOM (Rustig op de ivoor-achtergrond, geen zwevende box nodig) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
              reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <p className="eyebrow text-gold-antique tracking-widest text-xs sm:text-sm">
              {eyebrow}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] text-forest-deep leading-[1.18]">
              {title}
            </h2>

            {/* Subtiel decoratief Chinees karakter & gouden lijn */}
            <div className="flex items-center gap-4 py-1">
              <span className="h-px w-10 bg-gold-antique/40" />
              {hanziCharacter && (
                <span className="font-chinese text-gold-antique text-xl">
                  {hanziCharacter}
                </span>
              )}
              <span className="h-px w-10 bg-gold-antique/40" />
            </div>

            <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-xl">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors group"
              >
                <span className="border-b border-forest-deep/30 pb-1 group-hover:border-gold-antique transition-colors">
                  {ctaText}
                </span>
                <span className="transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* 2. HET ZEN-MOZAÏEK (Subtiel, ingelijst en gelaagd) */}
          <div
            className={`lg:col-span-7 relative ${
              reverse ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decoratieve achtergrondcontour (haarfijn kader voor een architectonisch TCM-accent) */}
              <div 
                className={`hidden sm:block absolute -top-4 w-4/5 h-[85%] border border-gold-antique/25 pointer-events-none -z-0 ${
                  reverse ? '-right-4' : '-left-4'
                }`} 
              />

              {/* BEELD A: Hoofdfoto in strak kader met passe-partout */}
              <div className="relative z-10 w-4/5 sm:w-3/4 aspect-[4/5] bg-ivory p-2 sm:p-3 border border-border-light shadow-sm">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={mainImageSrc}
                    alt={mainImageAlt}
                    fill
                    className="object-cover object-center filter contrast-[0.93] brightness-[0.98]"
                    sizes="(max-width: 1024px) 80vw, 40vw"
                  />
                  {/* Zeer subtiele warme waas zodat het beeld natuurlijk versmelt met ivoor */}
                  <div className="absolute inset-0 bg-forest-dark/5 mix-blend-multiply" />
                </div>
              </div>

              {/* BEELD B: Verspringend detailbeeld (asymmetrische overlap) */}
              <div 
                className={`absolute z-20 w-1/2 sm:w-5/12 aspect-square bg-ivory p-2 sm:p-2.5 border border-border-light shadow-md ${
                  reverse 
                    ? '-bottom-6 -left-3 sm:-bottom-8 sm:left-4' 
                    : '-bottom-6 -right-3 sm:-bottom-8 sm:right-6'
                }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={detailImageSrc}
                    alt={detailImageAlt}
                    fill
                    className="object-cover object-center filter contrast-[0.95]"
                    sizes="(max-width: 1024px) 45vw, 25vw"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
