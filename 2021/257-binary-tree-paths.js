// https://leetcode-cn.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  if (!root) {
    return []
  }

  if (!root.left && !root.right) {
    return [`${root.val}`]
  }

  const leftPaths = binaryTreePaths(root.left)
  const rightPaths = binaryTreePaths(root.right)

  const result = [...leftPaths, ...rightPaths].map(path => `${root.val}->${path}`)

  return result
}
