// https://leetcode.cn/problems/coin-change/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      const sub = i - coin;
      if (sub === 0) {
        min = 1;
        continue;
      }

      if (sub < 0 || dp[sub] === -1) {
        continue;
      }

      min = Math.min(min, dp[sub] + 1);
    }

    if (min === Number.MAX_SAFE_INTEGER) {
      dp[i] = -1;
    } else {
      dp[i] = min;
    }
  }

  return dp[amount];
};