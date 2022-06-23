// https://leetcode.cn/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  const m = grid.length
  const n = grid[0].length

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return 0
    }

    if (grid[x][y] === 0) {
      return 0
    }

    let answer = 1
    // 修改为 0，避免再次访问
    grid[x][y] = 0

    const directionList = [
      [0, 1], [1, 0],
      [0, -1], [-1, 0]
    ]

    for (const [i, j] of directionList) {
      answer += dfs(x + i, y + j)
    }

    return answer
  }

  let result = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j))
    }
  }

  return result
}
