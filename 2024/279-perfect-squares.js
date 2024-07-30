// https://leetcode.cn/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = [0, 1, 2, 3, 1];
  const helper = (num) => {
    if (typeof dp[num] === 'number') {
      return dp[num];
    };

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i ** 2 <= num; i++) {
      const square = i ** 2;
      min = Math.min(min, helper(num - square) + 1);
    }

    dp[num] = min;
    return dp[num];
  }

  helper(n);
  return dp[n];
};