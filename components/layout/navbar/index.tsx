import { ChevronRightIcon } from '@heroicons/react/24/outline';
import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between bg-white/80 px-6 backdrop-blur-md">
      <div className="block flex-none lg:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center space-x-6">
        <div className="flex w-full items-center">
          <Link
            href="/"
            prefetch={true}
            className="cursor-pointe mr-2 flex w-full items-center justify-center lg:mr-12 lg:w-auto"
          >
            <LogoSquare />
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm lg:flex">
              <MenuItem title="ホーム" path="/" hideChevron />
              <div>
                {menu.map((item: Menu) => (
                  <MenuItem key={item.title} title={item.title} path={item.path} />
                ))}
              </div>
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center lg:flex lg:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}

const MenuItem = ({
  title,
  path,
  hideChevron = false
}: {
  title: string;
  path: string;
  hideChevron?: boolean;
}) => {
  return (
    <li key={title}>
      <Link href={path} prefetch={true} className="flex items-center">
        {!hideChevron && <ChevronRightIcon className="mr-2 h-4 w-4" />}
        {title}
      </Link>
    </li>
  );
};
