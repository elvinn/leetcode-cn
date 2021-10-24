// https://leetcode-cn.com/problems/unique-binary-search-trees/


// 动态规划的备忘录
const notes = {
  0: 1,
  1: 1,
  2: 2,
}

/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  if (notes[n]) {
    return notes[n]
  }

  let result = 0
  for (let i = 0; i < n; i ++) {
    result += numTrees(i) * numTrees(n - 1 - i)
  }

  notes[n] = result

  return result
}
