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
 * @return {string}
 */
const tree2str = function (root) {
  const helper = (node) => {
    if (!node) {
      return ''
    }

    if (!node.left && !node.right) {
      return `${node.val}`
    }

    const leftStr = node.left ? `(${helper(node.left)})` : '()'
    const rightStr = node.right ? `(${helper(node.right)})` : ''
    return `${node.val}${leftStr}${rightStr}`
  }

  return helper(root)
}
