// https://leetcode-cn.com/problems/balanced-binary-tree/

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
const isBalanced = function (root) {
  const traverse = (node) => {
    if (!node) {
      return [true, 0]
    }

    const [isLeftBalanced, leftHeight] = traverse(node.left)
    const [isRightBalanced, rightHeight] = traverse(node.right)

    const isNodeBalanced = isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1
    const nodeHeight = Math.max(leftHeight, rightHeight) + 1

    return [isNodeBalanced, nodeHeight]
  }

  const [isRootBalanced] = traverse(root)
  return isRootBalanced
}
