// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  // 存储中序遍历下标结果，加快搜索
  const map = {}
  inorder.forEach((val, index) => map[val] = index)

  // 左闭右开区间
  const buildByRange = (inLeft, inRight, postLeft, postRight) => {
    if (inLeft >= inRight || postLeft >= postRight) {
      return null
    }

    const nodeVal = postorder[postRight - 1]
    const nodeIndex = map[nodeVal]
    const leftTreeCount = nodeIndex - inLeft

    return {
      val: nodeVal,
      left: buildByRange(inLeft, nodeIndex, postLeft, postLeft + leftTreeCount),
      right: buildByRange(nodeIndex + 1, inRight, postLeft + leftTreeCount, postRight - 1)
    }
  }

  return buildByRange(0, inorder.length, 0, postorder.length)
}
