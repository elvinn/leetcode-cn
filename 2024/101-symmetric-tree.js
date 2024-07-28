// https://leetcode.cn/problems/symmetric-tree/?envType=study-plan-v2&envId=top-100-liked

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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  const isChildrenSymmetric = (left, right) => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false
    }

    return isChildrenSymmetric(left.left, right.right) && isChildrenSymmetric(left.right, right.left);
  }

  return isChildrenSymmetric(root.left, root.right);
};