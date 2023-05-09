export const countToBuy = (count: any, price: number) => {
  let total = (count * price)?.toFixed(2); // округляем до двух знаков после точки
  if (total?.endsWith('00')) { // если два символа после точки это 00
    total = parseInt(total)?.toString(); // преобразуем в число и удаляем десятичную часть
  }
  return {
    buyCount: count,
    commonPrice: total
  };
}

export const toFixedCount = (count: any) => {
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(count);
}
