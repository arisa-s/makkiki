import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from 'components/grid';
import SectionTitle from 'components/homepage/section-title';
import ProductGridItems from 'components/layout/product-grid-items';
import Prose from 'components/prose';
import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const decodedCollectionHandle = decodeURIComponent(params.collection);
  const collection = await getCollection(decodedCollectionHandle);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.descriptionHtml || `${collection.title} products`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const collection = await getCollection(decodeURIComponent(params.collection));
  const products = await getCollectionProducts({
    collection: decodeURIComponent(params.collection),
    sortKey,
    reverse
  });

  return (
    <section className="space-y-6 p-6 md:space-y-12 md:p-12">
      {collection ? (
        <div className="mx-auto max-w-3xl space-y-12">
          <SectionTitle title={collection.title} />
          <Prose html={collection.descriptionHtml} />
        </div>
      ) : null}
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`該当する商品が見つかりませんでした。`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
