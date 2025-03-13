import { getBannerCollections } from 'lib/shopify';
import { FC } from 'react';
import { CollectionsCarousel } from './collections-carousel';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 pb-4 pt-12 md:space-y-24 md:pt-24">
      <CollectionsCarousel collections={collections} />
    </section>
  );
};

export default CollectionsSection;
