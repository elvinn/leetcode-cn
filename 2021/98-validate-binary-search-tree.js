// https://leetcode-cn.com/problems/validate-binary-search-tree/

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
 * @return {boolean}
 */
const isValidBST = function (root) {
  let pre = -Number.MAX_SAFE_INTEGER

  const dfs = (node) => {
    if (!node) {
      return true
    }

    if (!dfs(node.left)) {
      return false
    }

    const { val } = node

    // 二叉搜索树的中序遍历应该是递增的
    if (val <= pre) {
      return false
    }

    pre = val

    if (!dfs(node.right)) {
      return false
    }

    return true
  }

  return dfs(root)
}
