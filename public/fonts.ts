import { Hina_Mincho, Mochiy_Pop_P_One, Zen_Kaku_Gothic_Antique } from 'next/font/google';
import localFont from 'next/font/local';

export const makkikiBrand = localFont({
  src: [
    {
      path: '../fonts/Makkiki-Accent.ttf',
      style: 'latin',
      weight: '400'
    }
  ],
  variable: '--font-brand'
});

export const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  variable: '--font-base',
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
});

export const mPlusRounded1c = Hina_Mincho({
  variable: '--font-accent',
  weight: ['400'],
  subsets: ['latin']
});

export const mochiy = Mochiy_Pop_P_One({
  variable: '--font-accent-secondary',
  weight: ['400'],
  subsets: ['latin']
});
