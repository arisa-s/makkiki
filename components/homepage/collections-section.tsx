import { getBannerCollections } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import SectionTitle from './section-title';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 pb-4 pt-12 md:space-y-24 md:pt-24">
      <SectionTitle title="カテゴリー" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-20">
        {collections.map((collection) => {
          const img = collection.image;
          return (
            <Link href={collection.path} key={collection.title}>
              <div>
                {img && (
                  <Image
                    src={img.url}
                    alt={img.altText || collection.title}
                    width={img.width}
                    height={img.height}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CollectionsSection;
