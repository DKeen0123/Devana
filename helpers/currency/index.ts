export const formatCurrency = (amount: number, format: string = 'en-US') => {
  return new Intl.NumberFormat(format, {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};
