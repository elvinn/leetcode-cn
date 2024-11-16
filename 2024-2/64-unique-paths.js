// https://leetcode.cn/problems/minimum-path-sum/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const rowNum = grid.length;
  const colNum = grid[0].length;
  const dp = [];
  for (let i = 0; i < rowNum; i++) {
    dp[i] = [];
  }

  dp[0][0] = grid[0][0];

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (i === 0 & j === 0) {
        continue;
      }
      dp[i][j] = Math.min(
        typeof dp[i - 1]?.[j] === 'undefined' ? Number.MAX_VALUE : dp[i - 1]?.[j],
        typeof dp[i]?.[j - 1] === 'undefined' ? Number.MAX_VALUE : dp[i]?.[j - 1]
      ) + grid[i][j];
    }
  }

  return dp[rowNum - 1][colNum - 1];
};

console.log(minPathSum([[1, 2], [1, 1]]));
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
