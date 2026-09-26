import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface StorySectionProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  align?: 'left' | 'right';
}

export default function StorySection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
  align = 'right',
}: StorySectionProps) {
  const isRight = align === 'right';

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center py-20 px-6 sm:px-12">
      {/* Achtergrondfoto */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-dark/25 mix-blend-multiply" />
      </div>

      {/* Kaart */}
      <div
        className={`mx-auto w-full max-w-7xl flex ${
          isRight ? 'justify-end' : 'justify-start'
        }`}
      >
        <div className="w-full max-w-xl rounded-2xl bg-ivory/92 p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-border-light">
          <p className="eyebrow text-gold-antique mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-deep leading-tight">
            {title}
          </h2>
          <div className="divider-gold my-5" />
          <p className="font-body text-text-soft text-base sm:text-lg leading-relaxed mb-8">
            {description}
          </p>
          {buttonText && buttonHref && (
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors group"
            >
              <span>{buttonText}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}