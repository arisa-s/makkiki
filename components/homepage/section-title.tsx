import { FC } from 'react';

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex w-full items-center">
      <div className="flex-1"></div>
      <h2 className="mx-6 text-lg font-thin text-primary md:text-2xl">{title}</h2>
      <div className="flex-1"></div>
    </div>
  );
};

export default SectionTitle;
