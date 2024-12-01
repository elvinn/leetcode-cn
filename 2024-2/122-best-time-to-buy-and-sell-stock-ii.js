// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices.length === 1) {
    return 0;
  }

  const dpBuy = [-prices[0]];
  const dpSell = [0];

  for (let i = 1; i < prices.length; i++) {
    dpBuy[i] = Math.max(...dpSell) - prices[i];
    let max = 0;
    for (let j = 0; j < dpBuy.length; j++) {
      max = Math.max(max, dpBuy[j] + prices[i]);
    }
    dpSell[i] = max;
  }

  return Math.max(...dpSell);
};

console.assert(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
