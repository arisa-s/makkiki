import { Carousel } from 'components/carousel';
import Link from 'next/link';
import { FC } from 'react';
import SectionTitle from './section-title';

export interface LatestArrivalProps {}

export const LatestArrival: FC<LatestArrivalProps> = async ({}) => {
  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 py-12 pb-4 md:space-y-12 md:py-24">
      <SectionTitle title="新着アイテム" />
      <div className="flex flex-col space-y-4 md:space-y-8">
        <Link href="/search" className="ml-auto text-sm underline">
          全ての商品を見る
        </Link>
        <Carousel />
      </div>
    </section>
  );
};

export default LatestArrival;
