// https://leetcode.cn/problems/minimum-falling-path-sum/?envType=study-plan-v2&envId=dynamic-programming

const MAX_VAL = 10000;
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  if (n === 1) {
    return matrix[0][0];
  }

  const memo = [];
  memo[0] = matrix[0];
  for (let i = 1; i < n; i++) {
    const lastRow = memo[i - 1];
    memo[i] = [];

    memo[i][0] = Math.min(lastRow[0], lastRow[1]) + matrix[i][0];
    for (let j = 1; j < n - 1; j++) {
      memo[i][j] = Math.min(
        lastRow[j - 1],
        lastRow[j],
        lastRow[j + 1],
      ) + matrix[i][j];
    }

    memo[i][n - 1] = Math.min(lastRow[n - 2], lastRow[n - 1]) + matrix[i][n - 1];
  }


  return Math.min(...memo[n - 1]);
};

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));
