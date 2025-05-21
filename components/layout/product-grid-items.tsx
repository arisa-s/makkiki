import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeI p-6">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                position: 'bottom'
              }}
              src={product.featuredImage?.url}
              width={product.featuredImage?.width}
              height={product.featuredImage?.height}
              availableForSale={product.availableForSale}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
