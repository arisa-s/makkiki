import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div className={clsx('flex flex-none items-center justify-center py-4')}>
      <Image src="/brand/makkiki_logo.webp" alt="MAKKiKi" width={80} height={80} />
      <div className="-mt-2 text-right">
        <span className="leading-1 text-xs">まっきき</span>
        <h1 className="text-2xl font-thin">MAKKiKi</h1>
      </div>
    </div>
  );
}
