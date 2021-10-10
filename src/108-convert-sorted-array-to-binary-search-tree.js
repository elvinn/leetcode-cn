// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  const traverse = (left, right) => {
    if (left > right) {
      return null
    }

    if (left === right) {
      return {
        val: nums[left],
        left: null,
        right: null
      }
    }

    const middle = Math.ceil((left + right) / 2)
    const node = { val: nums[middle] }
    node.left = traverse(left, middle - 1)
    node.right = traverse(middle + 1, right)

    return node
  }

  return traverse(0, nums.length - 1)
}
