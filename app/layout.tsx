import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { VacationProvider } from 'components/providers/vacation-provider';
import { GeistSans } from 'geist/font/sans';
import { getCart, getVacationStatus } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import { moomin, mPlusRounded1c, passionOne, zenKakuGothicAntique } from 'public/fonts';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { vacationEnabled, description } = await getVacationStatus();
  const cartId = (await cookies()).get('cartId')?.value;
  const cart = getCart(cartId);

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${mPlusRounded1c.variable} ${moomin.variable} ${zenKakuGothicAntique.variable} ${passionOne.variable}`}
    >
      <body className="bg-neutral-50 pt-24 font-base text-primary selection:bg-teal-300">
        <VacationProvider
          initialState={{
            onVacation: vacationEnabled,
            description,
            loading: vacationEnabled !== undefined
          }}
        >
          <CartProvider cartPromise={cart}>
            <Navbar />
            <main>
              {children}
              <Toaster closeButton />s{' '}
            </main>
          </CartProvider>
        </VacationProvider>
      </body>
    </html>
  );
}
