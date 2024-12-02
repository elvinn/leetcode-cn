// https://leetcode.cn/problems/coin-change-ii/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};

console.assert(change(5, [1, 2, 5]) === 4);