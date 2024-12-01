// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  if (prices.length === 1) {
    return 0;
  }

  const dpHold = [-prices[0]]; // 当天持有股票
  const dpEmpty = [0]; // 当天不持有股票

  for (let i = 1; i < prices.length; i++) {
    dpEmpty[i] = Math.max(dpHold[i - 1] + prices[i] - fee, dpEmpty[i - 1]);
    dpHold[i] = Math.max(dpHold[i - 1], dpEmpty[i - 1] - prices[i]);
  }

  return Math.max(...dpEmpty);
};

console.assert(maxProfit([1, 3, 2, 8, 4, 9], 2) === 8);
