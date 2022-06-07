// https://leetcode-cn.com/problems/sum-of-left-leaves/

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
const sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }

  const isLeafNode = (node) => {
    return node && !node.left && !node.right
  }

  const helper = (node) => {
    if (!node) {
      return 0
    }

    let sum = 0

    if (node.left) {
      sum += isLeafNode(node.left) ? node.left.val : helper(node.left)
    }
    if (node.right) {
      sum += helper(node.right)
    }

    return sum
  }

  return helper(root)
}
