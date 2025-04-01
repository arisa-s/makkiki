const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  includeTax = false
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
  includeTax?: boolean;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
    {includeTax && <span className="ml-2 text-sm text-gray-500">(税込)</span>}
  </p>
);

export default Price;
