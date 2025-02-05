import { M_PLUS_Rounded_1c } from 'next/font/google';
import localFont from 'next/font/local';

export const makkikiAccent = localFont({
  src: [
    {
      path: '../fonts/Makkiki-Accent.ttf',
      style: 'latin',
      weight: '400'
    }
  ],
  variable: '--font-brand'
});

export const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: '--font-base',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin']
});
