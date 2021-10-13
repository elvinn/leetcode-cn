// https://leetcode-cn.com/problems/diameter-of-binary-tree/

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
const diameterOfBinaryTree = function(root) {
  let max = 0
  const helper = (node) => {
    if (!node) {
      return 0
    }

    const leftDepth = helper(node.left)
    const rightDepth = helper(node.right)
    max = Math.max(leftDepth + rightDepth + 1, max)

    return Math.max(leftDepth, rightDepth) + 1
  }

  helper(root)

  return max - 1
}