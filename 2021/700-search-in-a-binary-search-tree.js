// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  const helper = (node) => {
    if (!node) {
      return null
    }

    if (node.val === val) {
      return node
    }

    if (node.val > val) {
      return helper(node.left)
    }

    return helper(node.right)
  }

  return helper(root)
}
