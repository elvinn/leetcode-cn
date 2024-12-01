// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/?envType=study-plan-v2&envId=dynamic-programming

// 动态规划算法可以更进一步优化成 O(n) 复杂度的算法


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
    // 前一天不能卖出（因为有冷静期），所以取 [0, i - 1)
    dpBuy[i] = i === 1 ? -prices[i] : (Math.max(...dpSell.slice(0, i - 1)) - prices[i]);
    dpSell[i] = Math.max(...dpBuy.slice(0, i)) + prices[i];
  }

  return Math.max(...dpSell);
};

console.assert(maxProfit([1, 2, 3, 0, 2]) === 3);