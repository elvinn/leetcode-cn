// https://leetcode.cn/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  const m = text1.length
  const n = text2.length
  const notes = [] // m * n
  for (let i = 0; i < m; i++) {
    notes.push([])
  }

  // 计算在 notes 中，(x, y) 位置的数据
  const calAnswerItem = (x, y) => {
    if (x < 0 || y < 0) {
      return 0
    }

    if (notes[x][y]) {
      return notes[x][y]
    }

    if (text1[x] === text2[y]) {
      notes[x][y] = calAnswerItem(x - 1, y - 1) + 1
      return notes[x][y]
    }

    notes[x][y] = Math.max(calAnswerItem(x - 1, y), calAnswerItem(x, y - 1))
    return notes[x][y]
  }

  return calAnswerItem(m - 1, n - 1)
}
