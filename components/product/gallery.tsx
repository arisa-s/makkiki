'use client';

import { GridTileImage } from 'components/grid/tile';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import Image from 'next/image';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-11 px-6 transition-all ease-in-out hover:scale-110 hover:text-primary flex items-center justify-center';

  return (
    <form className="space-y-6">
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
        {images.map((image, index) => {
          const isActive = index === imageIndex;

          return (
            <li key={image.src} className="h-16 w-16">
              <button
                formAction={() => {
                  const newState = updateImage(index.toString());
                  updateURL(newState);
                }}
                aria-label="Select product image"
                className="h-full w-full"
              >
                <GridTileImage
                  alt={image.altText}
                  src={image.src}
                  width={80}
                  height={80}
                  active={isActive}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
