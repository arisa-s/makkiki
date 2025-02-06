import { FC } from 'react';

export interface SectionTitleProps {
  title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex w-full items-center">
      <div className="flex-1 border-t border-primary"></div>
      <h2 className="mx-6 font-accent-secondary text-lg font-medium text-primary md:text-2xl">
        {title}
      </h2>
      <div className="flex-1 border-t border-primary"></div>
    </div>
  );
};

export default SectionTitle;
