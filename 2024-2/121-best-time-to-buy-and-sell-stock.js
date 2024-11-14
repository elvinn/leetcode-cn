// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= prices[i - 1]) {
      // 上升的时候可以作为卖出点
      profit = Math.max(profit, prices[i] - buyPrice);
    } else if (prices[i] <= prices[i - 1]) {
      // 下降的时候可以作为买入点
      buyPrice = Math.min(buyPrice, prices[i]);
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
