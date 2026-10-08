import Image from 'next/image';

interface BambooFlankProps {
  side?: 'left' | 'right';
  /** Tailwind-opacity voor de inkt; laag houden, het is sfeer. */
  opacity?: string;
  className?: string;
}

/**
 * Grote, transparante inktbamboe langs de rand van een lange sectie.
 * - Plaats in een `relative` sectie; hij volgt je tijdens het scrollen (sticky),
 *   zodat hij in verhouding blijft, hoe lang de sectie ook wordt.
 * - Alleen vanaf xl: eronder is er geen marge naast de tekst.
 * - Zit achter de tekst (z-0) en vervaagt richting de inhoud.
 */
export default function BambooFlank({
  side = 'left',
  opacity = 'opacity-[0.28]',
  className = '',
}: BambooFlankProps) {
  const isLeft = side === 'left';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 z-0 hidden w-0 select-none xl:block ${
        isLeft ? 'left-0' : 'right-0'
      } ${className}`}
    >
      <div
        className={`sticky top-[10vh] ${opacity}`}
        style={{
          height: 'min(78vh, 640px)',
          aspectRatio: '1 / 1',
          transform: `translateX(${isLeft ? '-20%' : '-80%'})`,
          WebkitMaskImage: `linear-gradient(to ${isLeft ? 'right' : 'left'}, #000 0%, #000 45%, transparent 88%)`,
          maskImage: `linear-gradient(to ${isLeft ? 'right' : 'left'}, #000 0%, #000 45%, transparent 88%)`,
        }}
      >
        {/* next/image met fill vraagt een parent met position relative (de sticky parent telt niet) */}
        <div className="relative h-full w-full">
          <Image
            src="/images/bamboo-sumi-ink.webp"
            alt=""
            fill
            sizes="640px"
            className={`object-contain ${isLeft ? '-scale-x-100' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}
