// https://leetcode.cn/problems/coin-change/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    let minTimes = Number.MAX_VALUE;
    for (const coin of coins) {
      const leftValue = i - coin;
      if (leftValue < 0 || dp[leftValue] === -1) {
        continue;
      }

      minTimes = Math.min(minTimes, dp[leftValue] + 1);
    }

    dp[i] = minTimes === Number.MAX_VALUE ? -1 : minTimes;
  }

  return dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0