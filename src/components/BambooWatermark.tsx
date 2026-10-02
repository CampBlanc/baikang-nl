interface BambooWatermarkProps {
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  className?: string;
  opacity?: string; // bijv. 'opacity-[0.035]'
}

export default function BambooWatermark({
  position = 'top-right',
  className = '',
  opacity = 'opacity-[0.035]',
}: BambooWatermarkProps) {
  const positionClasses = {
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/6',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/6',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/6',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/6',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none text-forest-deep ${positionClasses} ${opacity} ${className}`}
    >
      <svg
        width="420"
        height="500"
        viewBox="0 0 420 500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-72 sm:w-96 lg:w-[460px] max-w-none"
      >
        {/* Gestileerde kalligrafische bamboebladeren (Mòzhú / Ink-wash stijl) */}
        <g transform="rotate(-12 210 250)">
          {/* Centrale hoofdtak / stengel met drukverloop */}
          <path d="M210 490 C 205 380, 202 260, 218 130 C 220 115, 221 80, 224 30 C 221 30, 216 115, 214 130 C 198 260, 201 380, 206 490 Z" />
          
          {/* Knooppunt accenten */}
          <ellipse cx="214" cy="310" rx="6" ry="2" transform="rotate(-5 214 310)" />
          <ellipse cx="217" cy="180" rx="5" ry="2" transform="rotate(-5 217 180)" />

          {/* Bovenste bladcluster */}
          <path d="M224 50 C 260 40, 320 65, 360 105 C 325 100, 275 85, 224 50 Z" />
          <path d="M222 75 C 270 85, 335 130, 355 180 C 325 155, 265 120, 222 75 Z" />
          <path d="M220 60 C 180 40, 130 55, 95 90 C 130 85, 175 75, 220 60 Z" />

          {/* Middelste bladcluster (lange soepele penseelstreken) */}
          <path d="M217 180 C 275 175, 345 215, 395 270 C 350 250, 280 220, 217 180 Z" />
          <path d="M216 195 C 265 215, 320 270, 340 330 C 315 290, 260 250, 216 195 Z" />
          <path d="M214 185 C 160 170, 100 195, 60 240 C 95 225, 155 210, 214 185 Z" />
          <path d="M213 200 C 170 220, 125 270, 105 320 C 125 280, 170 245, 213 200 Z" />

          {/* Onderste accentbladeren */}
          <path d="M214 310 C 260 320, 310 365, 335 415 C 305 385, 255 355, 214 310 Z" />
          <path d="M211 315 C 165 315, 115 350, 85 395 C 115 370, 165 350, 211 315 Z" />
        </g>
      </svg>
    </div>
  );
}