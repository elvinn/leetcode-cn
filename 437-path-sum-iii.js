// https://leetcode-cn.com/problems/path-sum-iii/

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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  const map = {
    0: 1 // 差值为 0 时，计数为 1
  }

  let result = 0

  const dsp = (node, pathSum = 0) => {
    if (!node) {
      return
    }

    const curSum = node.val + pathSum
    const diff = curSum - targetSum
    if (map[diff]) {
      result += map[diff]
    }

    // 更新前缀和数据
    if (map[curSum]) {
      map[curSum] += 1
    } else {
      map[curSum] = 1
    }

    dsp(node.left, curSum)
    dsp(node.right, curSum)

    map[curSum] -= 1
  }

  dsp(root)

  return result
}
