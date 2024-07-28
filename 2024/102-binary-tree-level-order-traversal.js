// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-100-liked

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
var levelOrder = function(root) {
  const result = [];

  const visit = (node, layer) => {
    if (!node) {
      return;
    }

    if (!result[layer]) {
      result[layer] = [];
    }

    result[layer].push(node.val);
    visit(node.left, layer + 1);
    visit(node.right, layer + 1);
  };

  visit(root, 0);
  return result;
};
