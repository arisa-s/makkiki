import clsx from 'clsx';
import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  availableForSale,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  availableForSale?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx('group h-full w-full', {
        'border-2 border-primary': active,
        'border-primary': !active
      })}
    >
      {props.src ? (
        <div className="relative h-full w-full">
          <Image
            className={clsx('h-full w-full object-cover', {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
            })}
            {...props}
          />
          {availableForSale === false && (
            <div className="text-pr absolute right-2 top-2 z-20 h-10 w-10 rounded-full border border-brand-primary bg-white/60 backdrop-blur-md">
              <div className="bg-primary/90 flex h-10 w-10 items-center justify-center rounded-full text-xs font-medium text-secondary">
                売り切れ
              </div>
            </div>
          )}
        </div>
      ) : null}
      {label ? (
        <div className="relative z-10 mb-8 mt-4">
          <Label
            title={label.title}
            amount={label.amount}
            currencyCode={label.currencyCode}
            position={label.position}
          />
        </div>
      ) : null}
    </div>
  );
}
