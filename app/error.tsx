'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="border-primary mx-auto my-4 flex max-w-xl flex-col rounded-lg border bg-white p-8 md:p-12">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">
        There was an issue with our storefront. This could be a temporary issue, please try your
        action again.
      </p>
      <button
        className="bg-component mx-auto mt-4 flex w-full items-center justify-center rounded-full p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
