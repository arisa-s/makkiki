import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center transition-colors">
      <ShoppingBagIcon
        className={clsx('h-6 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="bg-accent absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded text-[11px] font-medium text-primary">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
