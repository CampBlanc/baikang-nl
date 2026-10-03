import Image from 'next/image';

interface AtmosphericBambooProps {
  variant: 'stalk' | 'leaves' | 'stalk-leaves' | 'stick-leaves';
  position?: 
    | 'top-right' 
    | 'top-left' 
    | 'bottom-right' 
    | 'bottom-left' 
    | 'center-right' 
    | 'center-left'
    | 'center-right-mobile-left-desktop';
  className?: string;
  opacity?: string;
  flip?: boolean;
  priority?: boolean;
}

export default function AtmosphericBamboo({
  variant,
  position = 'top-right',
  className = '',
  opacity = 'opacity-20',
  flip = false,
  priority = true, // Laadt standaard direct in (voorkomt de LCP-waarschuwing)
}: AtmosphericBambooProps) {
  const images = {
    'stalk': {
      src: '/images/bamboo-stalk.jpg',
      alt: 'Kalligrafische bamboestengel met zegel',
    },
    'leaves': {
      src: '/images/bamboo-leaves.jpg',
      alt: 'Bamboebladeren in gewassen inkt',
    },
    'stalk-leaves': {
      src: '/images/bamboo-stalk-leaves.jpg',
      alt: 'Bamboestengel met fijne bladtakken',
    },
    'stick-leaves': {
      src: '/images/bamboo-stick-leaves.png',
      alt: 'Kalligrafische bamboestengel en bladeren',
    },
  };

  const { src, alt } = images[variant];

  const positionClasses = {
    'top-right': 'top-0 right-0 -translate-y-6 translate-x-6 sm:translate-x-3',
    'top-left': 'top-0 left-0 -translate-y-6 -translate-x-6 sm:-translate-x-3',
    'bottom-right': 'bottom-0 right-0 translate-y-6 translate-x-6 sm:translate-x-3',
    'bottom-left': 'bottom-0 left-0 translate-y-6 -translate-x-6 sm:-translate-x-3',
    'center-right': 'top-1/2 -translate-y-1/2 right-0 translate-x-8 sm:translate-x-4',
    'center-left': 'top-1/2 -translate-y-1/2 left-0 -translate-x-8 sm:-translate-x-4',
    'center-right-mobile-left-desktop':
      'top-1/2 -translate-y-1/2 right-0 translate-x-6 sm:translate-x-3 lg:right-auto lg:left-0 lg:-translate-x-4 scale-x-100 lg:-scale-x-100',
  }[position];

  const flipClass = position === 'center-right-mobile-left-desktop' ? '' : flip ? '-scale-x-100' : '';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none mix-blend-multiply ${positionClasses} ${opacity} ${flipClass} ${className}`}
    >
      <div className="relative h-80 w-64 sm:h-[430px] sm:w-[320px] lg:h-[520px] lg:w-[400px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 260px, 400px"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}