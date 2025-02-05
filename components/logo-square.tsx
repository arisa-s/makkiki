import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[60px] w-[120px]': !size,
        'h-[50px] w-[100px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[60px] w-[120px]': !size,
          'h-[40px] w-[px]': size === 'sm'
        })}
      />
    </div>
  );
}
