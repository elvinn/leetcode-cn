// https://leetcode-cn.com/problems/recover-binary-search-tree/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
  let preNode = { val: -Number.MAX_SAFE_INTEGER }
  let firstNode = null
  let secondNode = null
  let isDone = false

  const dfs = (node) => {
    if (!node || isDone) {
      return
    }

    dfs(node.left)

    if (node.val <= preNode.val) {
      // 可能是相邻两个节点交换了位置，所以总是要先给 secondNode 赋值
      secondNode = node

      if (!firstNode) {
        firstNode = preNode
      } else {
        isDone = true
        return
      }
    }

    preNode = node

    dfs(node.right)
  }

  dfs(root)

  const temp = firstNode.val
  firstNode.val = secondNode.val
  secondNode.val = temp
}
