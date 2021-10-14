// https://leetcode-cn.com/problems/binary-tree-tilt/

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
const findTilt = function(root) {
  const helper = (node) => {
    if (!node) {
      return [0, 0]
    }

    const [leftSum, leftTilt] = helper(node.left)
    const [rightSum, rightTilt] = helper(node.right)
    const tilt = Math.abs(leftSum - rightSum)

    return [leftSum + rightSum + node.val, tilt + leftTilt + rightTilt]
  }

  const [_, result] = helper(root)

  return result
}
