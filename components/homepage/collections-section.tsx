import { getBannerCollections } from 'lib/shopify';
import { FC } from 'react';
import { CollectionsCarousel } from './collections-carousel';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="md:space-y-26 mx-auto max-w-screen-2xl space-y-12">
      <CollectionsCarousel collections={collections} />
    </section>
  );
};

export default CollectionsSection;
