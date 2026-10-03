interface BambooWatermarkProps {
  variant?: 'branch' | 'cluster' | 'minimal';
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  className?: string;
  opacity?: string;
  flip?: boolean;
}

export default function BambooWatermark({
  variant = 'branch',
  position = 'top-right',
  className = '',
  opacity = 'opacity-[0.035]',
  flip = false,
}: BambooWatermarkProps) {
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'bottom-right': 'bottom-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-left': 'bottom-0 left-0',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none text-forest-deep ${positionClasses} ${opacity} ${
        flip ? '-scale-x-100' : ''
      } ${className}`}
    >
      {/* VARIANT 1: BRANCH — Volle tak met stengel en knooppunten (ideaal voor de Hero) */}
      {variant === 'branch' && (
        <svg
          width="420"
          height="500"
          viewBox="0 0 420 500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-72 sm:w-96 lg:w-[460px] max-w-none"
        >
          <g transform="rotate(-12 210 250)">
            <path d="M210 490 C 205 380, 202 260, 218 130 C 220 115, 221 80, 224 30 C 221 30, 216 115, 214 130 C 198 260, 201 380, 206 490 Z" />
            <ellipse cx="214" cy="310" rx="6" ry="2" transform="rotate(-5 214 310)" />
            <ellipse cx="217" cy="180" rx="5" ry="2" transform="rotate(-5 217 180)" />
            <path d="M224 50 C 260 40, 320 65, 360 105 C 325 100, 275 85, 224 50 Z" />
            <path d="M222 75 C 270 85, 335 130, 355 180 C 325 155, 265 120, 222 75 Z" />
            <path d="M220 60 C 180 40, 130 55, 95 90 C 130 85, 175 75, 220 60 Z" />
            <path d="M217 180 C 275 175, 345 215, 395 270 C 350 250, 280 220, 217 180 Z" />
            <path d="M216 195 C 265 215, 320 270, 340 330 C 315 290, 260 250, 216 195 Z" />
            <path d="M214 185 C 160 170, 100 195, 60 240 C 95 225, 155 210, 214 185 Z" />
            <path d="M213 200 C 170 220, 125 270, 105 320 C 125 280, 170 245, 213 200 Z" />
            <path d="M214 310 C 260 320, 310 365, 335 415 C 305 385, 255 355, 214 310 Z" />
            <path d="M211 315 C 165 315, 115 350, 85 395 C 115 370, 165 350, 211 315 Z" />
          </g>
        </svg>
      )}

      {/* VARIANT 2: CLUSTER — Brede penseelwaaier zonder zware stengel (ideaal achter de hulpvraag-cards) */}
      {variant === 'cluster' && (
        <svg
          width="400"
          height="360"
          viewBox="0 0 400 360"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-64 sm:w-80 lg:w-[400px] max-w-none"
        >
          <g transform="rotate(8 200 180)">
            {/* Hoofdcluster in Chinese '介'-patroon */}
            <path d="M60 280 C 110 260, 180 230, 260 210 C 210 215, 130 245, 60 280 Z" />
            <path d="M70 275 C 130 230, 220 180, 340 140 C 260 165, 160 215, 70 275 Z" />
            <path d="M75 270 C 150 200, 250 130, 370 70 C 280 115, 180 180, 75 270 Z" />
            <path d="M80 265 C 130 170, 200 90, 280 30 C 220 85, 150 165, 80 265 Z" />
            {/* Klein afhangend blad aan de onderzijde */}
            <path d="M65 282 C 105 295, 155 320, 210 345 C 165 325, 120 305, 65 282 Z" />
          </g>
        </svg>
      )}

      {/* VARIANT 3: MINIMAL — Zachte, afbuigende penseelstreek met 3 bladeren (ideaal bij portret of footer) */}
      {variant === 'minimal' && (
        <svg
          width="320"
          height="300"
          viewBox="0 0 320 300"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-56 sm:w-72 lg:w-[320px] max-w-none"
        >
          <g transform="rotate(-18 160 150)">
            {/* Lichte gebogen stengelaanzet */}
            <path d="M30 40 C 70 80, 110 130, 145 190 C 142 190, 105 130, 28 40 Z" />
            {/* Drie serene afhangende bladeren */}
            <path d="M145 190 C 180 215, 230 245, 290 270 C 240 245, 190 220, 145 190 Z" />
            <path d="M140 185 C 175 195, 225 210, 285 220 C 235 205, 185 195, 140 185 Z" />
            <path d="M135 180 C 160 160, 200 145, 255 135 C 210 145, 170 160, 135 180 Z" />
          </g>
        </svg>
      )}
    </div>
  );
}