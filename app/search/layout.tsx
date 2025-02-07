import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-primary md:flex-row">
        <div className="order-first mt-6 w-full flex-none md:mt-12 md:max-w-[200px]">
          <Collections />
        </div>
        <div className="order-last mt-12 min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="order-none mt-6 flex-none md:order-last md:mt-12 md:w-[200px]">
          <FilterList list={sorting} title="並べ替え" />
        </div>
      </div>
      <Footer />
    </>
  );
}
