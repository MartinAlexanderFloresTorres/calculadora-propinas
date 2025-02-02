export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat('en-ES', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
