// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  const result = []

  const helper = (node) => {
    if (!node) {
      return
    }

    helper(node.left)
    helper(node.right)

    result.push(node.val)
  }

  helper(root)

  return result
}
