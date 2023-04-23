export const countToBuy = (count: any, price?: number) => {
  return { buyCount: count, commonPrice: price ? count * price : null }
}
