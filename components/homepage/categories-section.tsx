import Image from 'next/image';
import { FC } from 'react';
import SectionTitle from './section-title';

export interface CategoriesSectionProps {}

export const CategoriesSection: FC<CategoriesSectionProps> = ({}) => {
  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 py-12 pb-4 md:space-y-24 md:py-24">
      <SectionTitle title="カテゴリー" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-20">
        <Image src="/img/banner/baby.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/marimekko.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/golf.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/dog.png" alt="category" width={1000} height={500} />
      </div>
    </section>
  );
};

export default CategoriesSection;
