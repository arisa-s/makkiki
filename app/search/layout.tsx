import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col px-4 pb-4 text-primary md:flex-row md:gap-24 md:px-12">
        <div className="order-first mt-6 flex w-full flex-none flex-col md:mt-16 md:max-w-[240px] md:gap-12">
          <Collections />
          <FilterList list={sorting} title="並べ替え" />
        </div>
        <div className="order-last mt-12 min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
      </div>
      <Footer />
    </>
  );
}
