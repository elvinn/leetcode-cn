// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  };

  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    max += Math.max(0, prices[i] - prices[i - 1]);
  }

  return max;
};
