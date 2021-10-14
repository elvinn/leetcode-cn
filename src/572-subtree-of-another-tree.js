// https://leetcode-cn.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  const helper = (node, charList = []) => {
    if (!node) {
      return
    }

    charList.push(node.val)

    if (node.left) {
      helper(node.left, charList)
    } else {
      charList.push('L')
    }

    if (node.right) {
      helper(node.right, charList)
    } else {
      charList.push('R')
    }

    return charList
  }

  const rootStr = helper(root).join(' ')
  const subRootStr = helper(subRoot).join(' ')

  const index = rootStr.indexOf(subRootStr)
  return index === 0 || (index > 0 && rootStr[index - 1] === ' ')
}
