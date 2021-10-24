// https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
  if (!n) {
    return []
  }

  // [start, end)
  const helper = (start, end) => {
    if (start >= end) {
      return [null]
    }

    const result = []
    for (let i = start; i < end; i++) {
      const leftTrees = helper(start, i)
      const rightTrees = helper(i + 1, end)
      leftTrees.forEach((leftTree) => {
        rightTrees.forEach((rightTree) => {
          result.push({
            val: i + 1,
            left: leftTree,
            right: rightTree
          })
        })
      })
    }

    return result
  }

  return helper(0, n)
}
