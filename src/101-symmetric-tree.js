// https://leetcode-cn.com/problems/symmetric-tree/

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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) {
    return true
  }

  const helper = (p, q) => {
    if (!p || !q) {
      return p === q
    }

    if (p.val !== q.val) {
      return false
    }

    return helper(p.left, q.right) && helper(p.right, q.left)
  }

  return helper(root.left, root.right)
}
