// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  const minVal = Math.min(p.val, q.val)
  const maxVal = Math.max(p.val, q.val)

  while (root) {
    if (root.val > maxVal) {
      root = root.left
    } else if (root.val < minVal) {
      root = root.right
    } else {
      return root
    }
  }

  return null
}
