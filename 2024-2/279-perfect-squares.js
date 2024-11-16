// https://leetcode.cn/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  // 动态规划求解
  const memo = {}; // 备忘录
  const dp = (num) => {
    if (num === 0) {
      return 0;
    }

    if (!memo[num]) {
      let maxN = Math.sqrt(num);
      let min = Number.MAX_SAFE_INTEGER;

      for (let i = 1; i <= maxN; i++) {
        min = Math.min(min, dp(num - i ** 2) + 1);
      }

      memo[num] = min;
    }

    return memo[num]
  };

  return dp(n);
};

console.log(numSquares(1));
console.log(numSquares(4));
console.log(numSquares(9));
console.log(numSquares(10));
console.log(numSquares(12));
console.log(numSquares(13));
