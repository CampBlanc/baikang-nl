import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Oude /diensten-URL's (placeholderpagina's / oude WordPress-structuur) permanent doorsturen naar de juiste plek.
// Werkt zowel met als zonder taalprefix (/nl, /en). Redirects draaien vóór de proxy.
const LEGACY_REDIRECTS: { from: string; to: string }[] = [
  { from: '/diensten', to: '/acupunctuur' },
  { from: '/diensten/acupunctuur', to: '/acupunctuur' },
  { from: '/diensten/acupunctuur/pijnverlichting', to: '/klachten#pijn' },
  { from: '/diensten/acupunctuur/stress-burn-out-en-angst', to: '/klachten#stress' },
  { from: '/diensten/acupunctuur/slaapproblemen-en-vermoeidheid', to: '/klachten#energie' },
  { from: '/diensten/acupunctuur/maag-en-darmklachten', to: '/klachten#maag-darmen' },
  { from: '/diensten/acupunctuur/mannen-en-vrouwenklachten', to: '/klachten#vrouw-man' },
  { from: '/diensten/acupunctuur/stoppen-met-roken', to: 'https://rookvrij.nu' },
  { from: '/diensten/andere-diensten', to: '/methode' },
  { from: '/diensten/andere-diensten/cupping', to: '/behandelvormen/cupping' },
  { from: '/diensten/andere-diensten/guasha', to: '/behandelvormen/guasha' },
  { from: '/diensten/andere-diensten/reiki', to: '/behandelvormen/reiki' },
  // Nog geen eigen invulling: tijdelijk naar bestaande inhoud
  { from: '/laseracupunctuur', to: '/acupunctuur#laseracupunctuur' },
  { from: '/blog', to: '/klachten' },
  { from: '/blog/:path*', to: '/klachten' },
  { from: '/tarieven/verzekering', to: '/tarieven' },

  // Oude WordPress-URL's (baikang.nl voor de overstap naar Next.js)
  { from: '/reiki', to: '/behandelvormen/reiki' },
  { from: '/guasha', to: '/behandelvormen/guasha' },
  { from: '/cupping', to: '/behandelvormen/cupping' },
  { from: '/massage', to: '/methode' },
  { from: '/stoppen-met-roken', to: 'https://rookvrij.nu' },
  { from: '/pijn-verlichting', to: '/klachten#pijn' },
  { from: '/slaapproblemen-vermoeidheid', to: '/klachten#stress' },
  { from: '/maag-en-darmklachten', to: '/klachten#maag-darmen' },
  { from: '/vrouwen-en-mannenklachten', to: '/klachten#vrouw-man' },
  { from: '/stress-burnout-angst', to: '/klachten#stress' },
  { from: '/laser-acupunctuur', to: '/acupunctuur#laseracupunctuur' },
  { from: '/over-mij', to: '/over-patrick' },
  { from: '/prijzen', to: '/tarieven' },
  { from: '/verzekering', to: '/tarieven' },
  { from: '/plan-afspraak', to: '/contact' },
  { from: '/privacy-policy', to: '/privacy' },
  { from: '/news', to: '/klachten' },
  { from: '/news/:path*', to: '/klachten' },

  { from: '/algemene-voorwaarden', to: '/voorwaarden' },
];

// Tijdelijke (307) redirects: deze pagina's komen later (weer) terug
const isTemporary = (from: string) =>
  ['/blog', '/news'].some((p) => from.startsWith(p));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return LEGACY_REDIRECTS.flatMap(({ from, to }) => {
      const external = to.startsWith('http');
      return [
        {
          source: `/:locale(nl|en)${from}`,
          destination: external ? to : `/:locale${to}`,
          permanent: !isTemporary(from),
        },
        {
          source: from,
          destination: external ? to : `/nl${to}`,
          permanent: !isTemporary(from),
        },
      ];
    });
  },
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.next/**',
        '**/System Volume Information/**',
        '$RECYCLE.BIN/**',
      ],
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);