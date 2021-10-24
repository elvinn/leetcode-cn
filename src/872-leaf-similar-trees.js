// https://leetcode-cn.com/problems/leaf-similar-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const getLeafList = (root) => {
  const list = []
  const dfs = (node) => {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      list.push(node.val)
      return
    }

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return list
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const list1 = getLeafList(root1)
  const list2 = getLeafList(root2)

  if (list1.length !== list2.length) {
    return false
  }

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false
    }
  }

  return true
}
