import Image from 'next/image';

interface AtmosphericBlossomProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center-right';
  className?: string;
  opacity?: string;
  flip?: boolean;
}

export default function AtmosphericBlossom({
  position = 'top-right',
  className = '',
  opacity = 'opacity-15 md:opacity-20 xl:opacity-100', // <-- Hier xl: gebruiken in plaats van lg:
  flip = false,
}: AtmosphericBlossomProps) {
  const positionClasses = {
    'top-right': 'top-0 right-0 -translate-y-6 translate-x-6 sm:translate-x-3',
    'top-left': 'top-0 left-0 -translate-y-6 -translate-x-6 sm:-translate-x-3',
    'bottom-right': 'bottom-0 right-0 translate-y-6 translate-x-6 sm:translate-x-3',
    'bottom-left': 'bottom-0 left-0 translate-y-6 -translate-x-6 sm:-translate-x-3',
    'center-right': 'top-1/2 -translate-y-1/2 right-0 translate-x-8 sm:translate-x-4',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none mix-blend-multiply ${positionClasses} ${opacity} ${
        flip ? '-scale-x-100' : ''
      } ${className}`}
    >
      <div className="relative h-80 w-72 sm:h-[440px] sm:w-[380px] lg:h-[540px] lg:w-[460px]">
        <Image
          src="/images/chinese-style-ink-peach-blossom.png" // Controleer of dit .jpg of .png is in public/images/
          alt="Chinese bloesemtak in de achtergrond"
          fill
          priority // Voorkomt de LCP-waarschuwing en forceert loading="eager"
          sizes="(max-width: 768px) 300px, 460px"
          className="object-contain object-right-top"
        />
      </div>
    </div>
  );
}