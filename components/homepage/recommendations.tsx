import SectionTitle from 'components/homepage/section-title';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

function Reccomendation({ item }: { item: Product; priority?: boolean }) {
  return (
    <div className="row-span-1 space-y-6">
      <div className={`w-full bg-secondary p-6`}>
        <Link
          className="relative block h-full w-full bg-primary"
          href={`/product/${item.handle}`}
          prefetch={true}
        >
          <div className="bg-secondary">
            <Image
              src={item.featuredImage.url}
              alt={item.title}
              width={item.featuredImage.width}
              height={item.featuredImage.height}
              objectFit="contain"
              className="relative w-full transition duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <div className="space-y-2 md:space-y-4">
        <h3 className="font-accent text-xl">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export async function Reccomendations() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 pb-4 pt-12 md:pt-24 lg:pt-36">
      <SectionTitle title="おすすめアイテム" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 md:px-20">
        <Reccomendation item={firstProduct} />
        <Reccomendation item={secondProduct} />
        <Reccomendation item={thirdProduct} />
      </div>
    </section>
  );
}
