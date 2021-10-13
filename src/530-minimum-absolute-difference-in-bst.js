// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = function (root) {
  let min = Number.MAX_VALUE
  let lastVal

  const update = (val) => {
    if (typeof lastVal === 'undefined') {
      lastVal = val
      return
    }

    min = Math.min(min, Math.abs(lastVal - val))
    lastVal = val
  }

  const helper = (node) => {
    if (!node) {
      return
    }

    helper(node.left)
    update(node.val)
    helper(node.right)
  }

  helper(root)
  return min
}
