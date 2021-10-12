// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

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
const minDepth = function (root) {
  if (!root) {
    return 0
  }

  const leftMinDepth = minDepth(root.left)
  const rightMinDepth = minDepth(root.right)

  if (leftMinDepth === 0) {
    return rightMinDepth + 1
  }

  if (rightMinDepth === 0) {
    return leftMinDepth + 1
  }

  return Math.min(leftMinDepth, rightMinDepth) + 1
}
