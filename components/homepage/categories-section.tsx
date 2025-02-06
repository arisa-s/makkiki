import Image from 'next/image';
import { FC } from 'react';

export interface CategoriesSectionProps {}

export const CategoriesSection: FC<CategoriesSectionProps> = ({}) => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-24 pb-4">
      <div className="grid grid-cols-2 gap-12 px-20">
        <Image src="/img/banner/baby.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/marimekko.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/golf.png" alt="category" width={1000} height={500} />
        <Image src="/img/banner/dog.png" alt="category" width={1000} height={500} />
      </div>
    </section>
  );
};

export default CategoriesSection;
