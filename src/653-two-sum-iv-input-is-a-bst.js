// https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/

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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
  const map = {}

  const helper = (node) => {
    if (!node) {
      return false
    }

    if (map[k - node.val]) {
      return true
    }

    map[node.val] = 1

    return helper(node.left) || helper(node.right)
  }

  return helper(root)
}
