import SectionTitle from 'components/homepage/section-title';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

function Reccomendation({ item, priority }: { item: Product; priority?: boolean }) {
  return (
    <div className="row-span-1 space-y-6">
      <div className={`w-full bg-neutral-200 p-6`}>
        <Link
          className="relative block aspect-square h-full w-full bg-primary"
          href={`/product/${item.handle}`}
          prefetch={true}
        >
          <div className="bg-neutral-200">
            <Image
              src={item.featuredImage.url}
              alt={item.title}
              fill
              className="relative h-full w-full transition duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <h3 className="font-accent text-xl">{item.title}</h3>
      <p>{item.description}</p>
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
    <section className="mx-auto max-w-screen-2xl space-y-12 px-4 py-12 pb-4 md:py-24">
      <SectionTitle title="おすすめアイテム" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 md:px-20">
        <Reccomendation item={firstProduct} />
        <Reccomendation item={secondProduct} />
        <Reccomendation item={thirdProduct} />
      </div>
    </section>
  );
}
