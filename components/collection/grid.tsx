import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export interface CollectionGridProps {
  collectionHandle: string;
}

export async function CollectionGrid({ collectionHandle }: CollectionGridProps) {
  const products = await getCollectionProducts({ collection: collectionHandle });

  if (!products?.length) return null;

  return <ProductGridItems products={products} />;
}

export default CollectionGrid;
