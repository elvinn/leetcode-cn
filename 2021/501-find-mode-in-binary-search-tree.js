// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

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
const findMode = function (root) {
  let result = []
  let base
  let count = 0
  let maxCount = 0

  const update = (value) => {
    if (value === base) {
      count += 1
    } else {
      base = value
      count = 1
    }

    if (count === maxCount) {
      result.push(base)
    } else if (count > maxCount) {
      result = [value]
      maxCount = count
    }
  }

  const helper = (node) => {
    if (!node) {
      return
    }

    helper(node.left)
    update(node.val)
    helper(node.right)
  }

  helper(root)
  return result
}
