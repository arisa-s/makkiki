import { Carousel } from 'components/carousel';
import Link from 'next/link';
import { FC } from 'react';
import SectionTitle from './section-title';

export interface LatestArrivalProps {}

export const LatestArrival: FC<LatestArrivalProps> = async ({}) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-screen-2xl space-y-8 px-4 md:space-y-12">
        <SectionTitle title="新着アイテム" />
        <div className="flex flex-col space-y-4">
          <Link href="/search" className="ml-auto text-sm underline">
            全ての商品を見る
          </Link>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default LatestArrival;
