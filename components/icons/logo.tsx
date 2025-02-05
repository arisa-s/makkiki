import Image from 'next/image';

export default function LogoIcon() {
  return (
    <Image src="/brand/logo.png" alt="MAKKiKi logo" width={500} height={500} className="h-6 w-6" />
  );
}
