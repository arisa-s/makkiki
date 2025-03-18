'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutSection() {
  const [isBackImageTop, setIsBackImageTop] = useState(false);
  const controls = useAnimation();

  const handleImageSwap = async () => {
    setIsBackImageTop(!isBackImageTop);

    await controls.start({});
  };

  const frontVariants = {
    front: {
      left: 0,
      right: 'auto',
      top: '1rem',
      rotate: -3,
      zIndex: 10
    },
    back: {
      left: 'auto',
      right: 0,
      top: 0,
      rotate: 6,
      zIndex: 0
    }
  };

  const backVariants = {
    front: {
      left: 0,
      right: 'auto',
      top: '1rem',
      rotate: -3,
      zIndex: 10
    },
    back: {
      left: 'auto',
      right: 0,
      top: 0,
      rotate: 6,
      zIndex: 0
    }
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="lg grid gap-12 md:grid-cols-2 md:items-center md:gap-24 lg:gap-36">
        <div className="relative h-[400px] w-full cursor-pointer" onClick={handleImageSwap}>
          {/* Back image */}
          <motion.div
            className={`absolute h-[360px] w-[80%]`}
            initial="back"
            animate={isBackImageTop ? 'front' : 'back'}
            variants={backVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={'/about-image-2.JPEG'}
              alt="MAKKiKi store image 2"
              fill
              className="rounded-lg object-cover shadow-lg"
              sizes="(min-width: 768px) 40vw, 80vw"
            />
          </motion.div>
          {/* Front image */}
          <motion.div
            className="absolute h-[360px] w-[80%]"
            initial="front"
            animate={isBackImageTop ? 'back' : 'front'}
            variants={frontVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={'/about-image-1.JPEG'}
              alt="MAKKiKi store image 1"
              fill
              className="rounded-lg object-cover shadow-lg"
              sizes="(min-width: 768px) 40vw, 80vw"
              priority
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl">
            ようこそ<span className="text-brand-primary">MAKKiKi</span>へ！
          </h2>
          <div className="space-y-4 text-sm leading-relaxed md:text-base">
            <p>
              MAKKiKiは、心豊かにワクワクする雑貨を販売するオンラインショップです。ヨーロッパやアメリカ、オーストラリアで買い付けた特別な「もの」との出会いを大切にしています。
            </p>
            <p>
              デザインや素材にこだわり、日常が少し楽しくなるアイテムをセレクト。ふらっと訪れるたび、新しい発見があるお店を目指しています。MAKKiKiで、あなたの日常に豊かさとときめきをプラスしませんか？
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
