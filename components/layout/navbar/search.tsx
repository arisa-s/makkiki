'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const decodedKey = decodeURIComponent(searchParams?.get('q') || '');

  return (
    <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        key={decodedKey}
        type="text"
        name="q"
        placeholder="何かお探しですか？"
        autoComplete="off"
        defaultValue={decodedKey}
        className="text-md placeholder:text-accent w-full rounded-lg border bg-primary px-4 py-2 text-primary md:text-sm"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="何かお探しですか？"
        className="placeholder:text-accent w-full rounded-lg border bg-white px-4 py-2 text-sm text-primary"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
