// https://leetcode-cn.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const notes = [
    Array.from({ length: n }, () => 1) //  第一行之有一种走法
  ]
  for (let i = 1; i < m; i++) {
    const rowPaths = new Array(n)
    rowPaths[0] = 1
    for (let j = 1; j < n; j++) {
      rowPaths[j] = rowPaths[j - 1] + notes[i - 1][j]
    }

    notes.push(rowPaths)
  }

  return notes[m - 1][n - 1]
}
