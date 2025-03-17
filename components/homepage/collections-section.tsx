import { getBannerCollections } from 'lib/shopify';
import { FC } from 'react';
import { CollectionsCarousel } from './collections-carousel';
import SectionTitle from './section-title';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="w-full overflow-hidden md:mt-10">
      <SectionTitle title="MAKKiKi雑貨コレクション" />
      <div className="mx-auto max-w-screen-2xl">
        <CollectionsCarousel collections={collections} />
      </div>
    </section>
  );
};

export default CollectionsSection;
