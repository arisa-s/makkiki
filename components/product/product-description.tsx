import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col gap-6 border-b pb-6">
        <h1 className="mb-2 border-b border-brand-primary font-accent text-xl font-medium md:text-2xl">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-md p-2 text-xl text-primary">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm text-primary">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-brand-secondary px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose className="leading-tight/[60%] mb-6 text-sm" html={product.descriptionHtml} />
      ) : (
        product.description && <p className="text-sm text-gray-700">{product.description}</p>
      )}

      <div className="mt-6 md:mt-12">
        <AddToCart product={product} />
      </div>
    </>
  );
}
