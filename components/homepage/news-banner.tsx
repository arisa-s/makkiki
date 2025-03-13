import { FC } from 'react';
import Marquee from 'react-fast-marquee';

export interface NewsBannerProps {
  text: string;
}

export const NewsBanner: FC<NewsBannerProps> = ({ text }) => {
  return (
    <Marquee autoFill className="w-full border-b border-t border-primary bg-primary py-2">
      <p className="px-6">{text}</p>
    </Marquee>
  );
};

export default NewsBanner;
