// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  const levelSymbol = Symbol('#')
  const queue = [root, levelSymbol]
  const result = []
  let isOdd = false // 是否是奇数层

  let node = queue.shift()
  while (node) {
    const levelResult = []
    while (node !== levelSymbol) {
      isOdd
        ? levelResult.unshift(node.val)
        : levelResult.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }

      node = queue.shift()
    }

    node = queue.shift()
    result.push(levelResult)
    queue.push(levelSymbol)
    isOdd = !isOdd
  }

  return result
}
