// https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/

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
const findSecondMinimumValue = function (root) {
  if (!root) {
    return -1
  }

  let result = -1
  const min = root.val

  const helper = (node) => {
    if (!node) {
      return
    }

    if (result !== -1 && node.val >= result) {
      return
    }

    if (node.val > min) {
      result = node.val
    }

    helper(node.left)
    helper(node.right)
  }

  helper(root)
  return result
}
