import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Let op: 'api' MOET expliciet worden uitgesloten:
  matcher: ['/', '/(nl|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
