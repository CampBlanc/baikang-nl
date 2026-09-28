import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localeDetection: false // Negeert de browsertaal en start altijd op defaultLocale ('nl')
});