import Price from './price';

export const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1 text-sm">
        <h3 className="line-clamp-2 border-b border-brand-primary font-accent font-semibold text-primary">
          {title}
        </h3>
        <Price
          className="text-primary"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
