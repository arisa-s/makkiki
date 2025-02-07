'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

export interface CategoryButtonProps {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export const CategoryButton: FC<CategoryButtonProps> = ({ src, height, width, alt }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: [0, 10, -10],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={src} height={height} width={width} className="w-full" alt={alt} />
    </motion.div>
  );
};

export default CategoryButton;
