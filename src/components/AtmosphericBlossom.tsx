import Image from 'next/image';

interface AtmosphericBlossomProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center-right';
  className?: string;
  opacity?: string;
  flip?: boolean;
  rotate?: string;
}

export default function AtmosphericBlossom({
  position = 'top-right',
  className = '',
  opacity = 'opacity-85 lg:opacity-100',
  flip = false,
  rotate = '',
}: AtmosphericBlossomProps) {
  const positionClasses = {
    'top-right': 'top-0 right-0 -translate-y-4 translate-x-4 sm:translate-x-2',
    'top-left': 'top-0 left-0 -translate-y-4 -translate-x-4 sm:-translate-x-2',
    'bottom-right': 'bottom-0 right-0 translate-y-4 translate-x-4 sm:translate-x-2',
    'bottom-left': 'bottom-0 left-0 translate-y-4 -translate-x-4 sm:-translate-x-2',
    'center-right': 'top-1/2 -translate-y-1/2 right-0 translate-x-6 sm:translate-x-3',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none mix-blend-multiply ${positionClasses} ${opacity} ${
        flip ? '-scale-x-100' : ''
      } ${rotate} ${className}`}
    >
      <div className="relative h-80 w-72 sm:h-[440px] sm:w-[380px] lg:h-[520px] lg:w-[440px]">
        <Image
          src="/images/chinese-style-ink-peach-blossom.png"
          alt="Chinese bloesemtak in de achtergrond"
          fill
          priority={position === 'top-right'}
          sizes="(max-width: 768px) 300px, 440px"
          className="object-contain"
        />
      </div>
    </div>
  );
}