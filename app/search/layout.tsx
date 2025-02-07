import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col px-4 pb-4 text-primary md:flex-row md:gap-8">
        <div className="order-first mt-6 w-full flex-none md:mt-12 md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="order-none flex-none md:order-last md:mt-12 md:w-[125px]">
          <FilterList list={sorting} title="並べ替え" />
        </div>
      </div>
      <Footer />
    </>
  );
}
