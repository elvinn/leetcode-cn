// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let max = 0;
  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    } else {
      max = Math.max(max, price - minPrice);
    }
  })

  return max;
};
