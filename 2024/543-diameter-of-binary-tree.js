// https://leetcode.cn/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  var max = 0;

  const visit = (node) => {
    if (!node) {
      return 0;
    }

    const leftDepth = visit(node.left);
    const rightDepth = visit(node.right);
    max = Math.max(
      max,
      leftDepth + rightDepth,
    );

    return Math.max(leftDepth, rightDepth) + 1;
  }

  visit(root);

  return max;
};
