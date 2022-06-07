// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  // 存储中序遍历下标结果，加快搜索
  const map = {}
  inorder.forEach((val, index) => map[val] = index)

  // 左闭右开区间
  const buildByRange = (preLeft, preRight, inLeft, inRight) => {
    if (preLeft >= preRight || inLeft >= inRight) {
      return null
    }

    const nodeVal = preorder[preLeft]
    const nodeIndex = map[nodeVal]
    const leftTreeCount = nodeIndex - inLeft

    return {
      val: nodeVal,
      left: buildByRange(preLeft + 1, preLeft + 1 + leftTreeCount, inLeft, nodeIndex),
      right: buildByRange(preLeft + 1 + leftTreeCount, preRight, nodeIndex + 1, inRight)
    }
  }

  return buildByRange(0, preorder.length, 0, inorder.length)
}
