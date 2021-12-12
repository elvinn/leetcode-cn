// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0
  }

  let max = 0
  let current = 0
  for (let i = 1; i < prices.length; i++) {
    current += prices[i] - prices[i - 1]
    if (current < 0) {
      current = 0
    } else if (current > max) {
      max = current
    }
  }

  return max
}
