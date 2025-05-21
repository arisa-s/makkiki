import { FC } from 'react';

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex w-full items-center">
      <div className="flex-1"></div>
      <div className="flex items-center gap-4">
        <span className="text-brand-primary">---</span>
        <h2 className="text-xl font-thin text-primary md:text-2xl">{title}</h2>
        <span className="text-brand-primary">---</span>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default SectionTitle;
