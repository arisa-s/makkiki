import clsx from 'clsx';

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        'hover:prose-a:text-accent prose mx-auto max-w-6xl whitespace-pre-wrap text-base leading-4 text-primary prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-primary prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-p:my-1 prose-a:text-primary prose-a:underline prose-strong:text-primary prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
