'use client';

import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Collection {
  title: string;
  path: string;
  description: string;
  image?: {
    url: string;
    altText?: string;
    width: number;
    height: number;
  };
}

interface CollectionsCarouselProps {
  collections: Collection[];
}

export const CollectionsCarousel = ({ collections }: CollectionsCarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {collections.map((collection) => {
        const img = collection.image;
        return (
          <div key={collection.title} className="px-2">
            <Link href={collection.path}>
              <div className="relative">
                {img && (
                  <Image
                    src={img.url}
                    alt={img.altText || collection.title}
                    width={img.width}
                    height={img.height}
                    className="w-full object-cover"
                  />
                )}
                <div className="absolute right-2 top-48 flex flex-col gap-2 bg-primary p-2 text-sm md:top-32 md:max-w-[240px] lg:right-6 lg:top-60 lg:max-w-md lg:px-6 lg:py-4">
                  <h2 className="">{collection.title}</h2>
                  <p className="text-secondary">{collection.description}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
};
