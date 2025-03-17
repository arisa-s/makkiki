import { getBannerCollections } from 'lib/shopify';
import { FC } from 'react';
import { CollectionsCarousel } from './collections-carousel';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <CollectionsCarousel collections={collections} />
      </div>
    </section>
  );
};

export default CollectionsSection;
