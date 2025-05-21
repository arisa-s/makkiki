import { getProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import { Label } from './label';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getProducts({
    sortKey: 'CREATED_AT',
    reverse: true,
    limit: 5,
    cache: 'no-store'
  });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-12 md:gap-24">
        {carouselProducts.map((product, i) => (
          <li key={`${product.handle}${i}`} className="relative w-40 flex-none md:w-60">
            <div className="flex flex-col gap-2">
              <div className="relative aspect-[3/4]">
                <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                  <GridTileImage
                    alt={product.title}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 40vw"
                    priority={i < 5}
                    loading={i < 5 ? 'eager' : 'lazy'}
                    quality={85}
                  />
                </Link>
              </div>
              <Label
                title={product.title}
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                position="bottom"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
