import SectionTitle from 'components/homepage/section-title';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

function Reccomendation({ item }: { item: Product; priority?: boolean }) {
  return (
    <div className="row-span-1 space-y-6">
      <div className={`w-full bg-secondary md:p-6`}>
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
        <h3 className="line-clamp-2 pr-4 font-accent underline decoration-brand-primary md:text-lg">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-sm">{item.description}</p>
      </div>
    </div>
  );
}

export async function Reccomendations() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourthProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl space-y-6 px-4 md:space-y-12">
      <SectionTitle title="おすすめアイテム" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-16 md:px-20 lg:grid-cols-4">
        <Reccomendation item={firstProduct} />
        <Reccomendation item={secondProduct} />
        <div className="hidden md:block">
          <Reccomendation item={thirdProduct} />
        </div>
        <div className="hidden lg:block">
          <Reccomendation item={fourthProduct} />
        </div>
      </div>
    </section>
  );
}
