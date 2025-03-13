import { getBannerCollections } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export interface CollectionsSectionProps {}

export const CollectionsSection: FC<CollectionsSectionProps> = async ({}) => {
  const collections = await getBannerCollections();

  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 pb-4 pt-12 md:space-y-24 md:pt-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-20">
        {collections.map((collection) => {
          const img = collection.image;
          return (
            <Link href={collection.path} key={collection.title}>
              <div className="relative">
                {img && (
                  <Image
                    src={img.url}
                    alt={img.altText || collection.title}
                    width={img.width}
                    height={img.height}
                  />
                )}
                <div className="absolute right-2 top-48 flex flex-col gap-2 bg-primary p-2 text-sm md:top-32 md:max-w-[240px] lg:right-6 lg:top-60 lg:max-w-md lg:px-6 lg:py-4">
                  <h2 className="">{collection.title}</h2>
                  <p className="text-secondary">{collection.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CollectionsSection;
