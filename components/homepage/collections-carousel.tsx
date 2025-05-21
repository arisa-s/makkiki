'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Collection {
  title: string;
  path: string;
  descriptionHtml: string;
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

const stripHtml = (html: string) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

export const CollectionsCarousel = ({ collections }: CollectionsCarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<Carousel>(null);
  const width = 800;
  const height = 600;

  const normalizeIndex = (index: number) => {
    return ((index % collections.length) + collections.length) % collections.length;
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    carouselRef.current?.goToSlide(index);
  };

  const handleNext = useCallback(() => {
    if (!carouselRef.current) return;
    const nextIndex = normalizeIndex(currentIndex + 1);
    setCurrentIndex(nextIndex);
    carouselRef.current.next(1);
  }, [currentIndex, collections.length]);

  const handlePrevious = useCallback(() => {
    if (!carouselRef.current) return;
    const prevIndex = normalizeIndex(currentIndex - 1);
    setCurrentIndex(prevIndex);
    carouselRef.current.previous(1);
  }, [currentIndex, collections.length]);

  const handleBeforeChange = useCallback(
    (nextSlide: number) => {
      const normalizedIndex = normalizeIndex(nextSlide);
      setCurrentIndex(normalizedIndex);
    },
    [collections.length]
  );

  return (
    <div className="flex flex-col">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        draggable
        swipeable
        arrows={false}
        customTransition="transform 500ms ease-in-out"
        infinite
        beforeChange={handleBeforeChange}
        autoPlay
        autoPlaySpeed={5000}
        transitionDuration={500}
        containerClass="pb-4"
        itemClass="px-2"
        afterChange={(_, { currentSlide }) => {
          const normalizedIndex = normalizeIndex(currentSlide);
          setCurrentIndex(normalizedIndex);
        }}
      >
        {collections.map((collection) => {
          const img = collection.image;
          return (
            <div key={collection.title} className="relative px-2">
              <Link href={collection.path}>
                <div className="relative">
                  {img && (
                    <Image
                      src={img.url}
                      alt={img.altText || collection.title}
                      width={width}
                      height={height}
                      className="w-full"
                    />
                  )}
                  <div className="relative mx-auto -mt-16 flex w-full flex-col gap-2 border-b border-brand-primary bg-primary p-2 text-sm md:max-w-[240px] lg:max-w-sm lg:px-6 lg:py-4">
                    <h2 className="font-medium">{collection.title}</h2>
                    <p className="line-clamp-3 text-secondary">
                      {stripHtml(collection.descriptionHtml)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
      {/* Bottom Row */}
      <div className="mx-auto mt-4 flex w-full max-w-xl items-center justify-between md:mt-8">
        <button
          onClick={handlePrevious}
          className="border-border-primary bg-surface-primary hover:bg-surface-hover active:bg-surface-hover rounded-full border p-2 transition-colors focus:outline-none"
          aria-label="Previous"
        >
          <ChevronLeftIcon className="text-text-primary h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {collections.map((_, index) => (
            <button
              key={index}
              className={`border-border-primary mx-1 h-2 w-2 rounded-full border transition-all duration-300 ${
                normalizeIndex(currentIndex) === index
                  ? 'scale-110 bg-black'
                  : 'hover:border-surface-component hover:bg-surface-component/10 bg-transparent'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={normalizeIndex(currentIndex) === index ? 'true' : 'false'}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="border-border-primary bg-surface-primary hover:bg-surface-hover active:bg-surface-hover rounded-full border p-2 transition-colors focus:outline-none"
          aria-label="Next"
        >
          <ChevronRightIcon className="text-text-primary h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
