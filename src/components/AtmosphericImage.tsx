import Image from 'next/image';

export type ImageVariant = 
  | 'atmospheric'          // Ruime sfeer, zachte randen, ademt in de achtergrond
  | 'atmospheric-editorial'// Verhalend sfeerbeeld met lichte structuur
  | 'detail-editorial'     // Scherp kader voor diagnostiek of techniek
  | 'detail'               // Compact macro-accent (bijv. naald of kruid)
  | 'editorial-portrait'   // Natuurlijke huidtinten, ingetogen portret
  | 'environment';         // Rustige praktijkomgeving

export type ImageFade = 'none' | 'bottom' | 'top' | 'edges' | 'subtle';

interface AtmosphericImageProps {
  src: string;
  alt: string;
  variant?: ImageVariant;
  aspectRatio?: '4/5' | '3/4' | '16/10' | '16/9' | 'square' | 'auto';
  objectPosition?: string;
  fade?: ImageFade;
  hasBorder?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

const ASPECT_RATIO_CLASSES = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-[16/9]',
  'square': 'aspect-square',
  'auto': '',
};

export default function AtmosphericImage({
  src,
  alt,
  variant = 'atmospheric-editorial',
  aspectRatio = '4/5',
  objectPosition = 'center',
  fade = 'none',
  hasBorder = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw',
}: AtmosphericImageProps) {
  
  // Variantspecifieke tonale grading (lage/gemiddelde contrasten, geen HDR)
  const filterClasses = {
    'atmospheric': 'contrast-[0.92] brightness-[0.98] saturate-[0.90]',
    'atmospheric-editorial': 'contrast-[0.94] brightness-[0.98] saturate-[0.92]',
    'detail-editorial': 'contrast-[0.95] brightness-[0.99] saturate-[0.95]',
    'detail': 'contrast-[0.96] brightness-[0.99] saturate-[0.90]',
    'editorial-portrait': 'contrast-[0.93] brightness-[0.99] saturate-[0.94]',
    'environment': 'contrast-[0.91] brightness-[0.97] saturate-[0.88]',
  }[variant];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-none bg-ivory ${
        ASPECT_RATIO_CLASSES[aspectRatio]
      } ${
        hasBorder ? 'border border-border-light/50' : ''
      } ${className}`}
    >
      {/* 1. De Afbeelding */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition }}
        className={`object-cover transition-opacity duration-700 ${filterClasses}`}
      />

      {/* 2. Zachte tonale sluier (verbindt foto met warm ivoor) */}
      <div 
        className="absolute inset-0 bg-forest-dark/[0.04] mix-blend-multiply pointer-events-none" 
        aria-hidden="true"
      />

      {/* 3. Optionele zachte fades naar het ivoren canvas */}
      {fade === 'bottom' && (
        <div 
          className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-ivory via-ivory/60 to-transparent pointer-events-none"
          aria-hidden="true" 
        />
      )}

      {fade === 'top' && (
        <div 
          className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-ivory via-ivory/60 to-transparent pointer-events-none"
          aria-hidden="true" 
        />
      )}

      {fade === 'subtle' && (
        <div 
          className="absolute inset-0 ring-1 ring-inset ring-ivory/30 pointer-events-none"
          aria-hidden="true" 
        />
      )}

      {fade === 'edges' && (
        <div 
          className="absolute inset-0 shadow-[inset_0_0_40px_rgba(242,228,216,0.6)] pointer-events-none"
          aria-hidden="true" 
        />
      )}
    </div>
  );
}