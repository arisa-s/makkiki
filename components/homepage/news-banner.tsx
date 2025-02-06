import { FC } from 'react';
import Marquee from 'react-fast-marquee';

export interface NewsBannerProps {
  text: string;
}

export const NewsBanner: FC<NewsBannerProps> = ({ text }) => {
  return (
    <Marquee
      autoFill
      className="text-text-invert w-full border-b border-primary bg-primary py-4 text-lg font-medium"
    >
      <p className="px-6 sm:text-xl">{text}</p>
    </Marquee>
  );
};

export default NewsBanner;
