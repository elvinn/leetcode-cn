// https://leetcode.cn/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length
  const n = matrix[0].length
  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
    return false
  }

  // 先二分找行
  let top = 0
  let bottom = m - 1
  while (top < bottom) {
    const middle = Math.floor((top + bottom) / 2)
    const row = matrix[middle]

    if (row[0] <= target && row[n - 1] >= target) {
      top = middle
      break
    }

    if (row[0] > target) {
      bottom = middle - 1
    } else if (row[n - 1] < target) {
      top = middle + 1
    }
  }

  // 再二分找列
  let left = 0
  let right = n - 1
  const row = matrix[top]
  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    const item = row[middle]
    if (item === target) {
      return true
    }

    if (item > target) {
      right = middle - 1
    } else if (item < target) {
      left = middle + 1
    }
  }

  return row[left] === target
}
