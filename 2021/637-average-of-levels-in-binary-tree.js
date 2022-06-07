// https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/

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
const averageOfLevels = function (root) {
  if (!root) {
    return []
  }

  const averageList = []
  const queue = [root]

  while (queue.length) {
    const size = queue.length
    let sum = 0
    for (let i = 0; i < size; i += 1) {
      const node = queue.shift()
      sum += node.val
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    averageList.push(sum / size)
  }

  return averageList
}
