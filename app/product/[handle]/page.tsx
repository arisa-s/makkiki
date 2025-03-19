import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import SectionTitle from 'components/homepage/section-title';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const decodedHandle = decodeURIComponent(params.handle);
  const product = await getProduct(decodedHandle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage(props: { params: Promise<{ handle: string }> }) {
  const params = await props.params;
  const decodedHandle = decodeURIComponent(params.handle);
  const product = await getProduct(decodedHandle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl space-y-24 px-4 pb-24">
        <div className="flex flex-col gap-8 px-4 pt-12 md:px-12 md:pt-24 lg:flex-row">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </div>

          <div className="basis-full md:mx-24 lg:basis-3/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="space-y-8 py-8 md:space-y-12">
      <SectionTitle title="関連商品" />
      <div className="flex justify-center">
        <ul className="flex max-w-[1200px] gap-8 overflow-x-auto pt-1">
          {relatedProducts.map((product) => (
            <li key={product.handle} className="relative w-40 flex-none md:w-48">
              <Link
                className="relative h-full w-full"
                href={`/product/${product.handle}`}
                prefetch={true}
              >
                <div className="flex flex-col gap-2 md:gap-6">
                  <div className="relative aspect-[3/4]">
                    <GridTileImage
                      alt={product.title}
                      src={product.featuredImage?.url}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-xs">
                    <h3 className="line-clamp-2 font-semibold text-primary">{product.title}</h3>
                    <p className="text-primary">
                      {`${new Intl.NumberFormat(undefined, {
                        style: 'currency',
                        currency: product.priceRange.maxVariantPrice.currencyCode,
                        currencyDisplay: 'narrowSymbol'
                      }).format(parseFloat(product.priceRange.maxVariantPrice.amount))}`}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
