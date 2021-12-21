// https://leetcode-cn.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = []

  // 初始化第一行
  const firstRow = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 0) {
      firstRow[i] = 1
    } else {
      break
    }
  }
  dp.push(firstRow)

  for (let i = 1; i < m; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        row[j] = 0
        continue
      }

      row[j] = (row[j - 1] || 0) + (dp[i - 1][j] || 0)
    }

    dp.push(row)
  }

  return dp[m - 1][n - 1]
}
