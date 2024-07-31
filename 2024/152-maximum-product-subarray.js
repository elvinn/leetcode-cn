// https://leetcode.cn/problems/maximum-product-subarray/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const maxDp = [nums[0]];
  const minDp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    maxDp[i] = Math.max(val, val * maxDp[i - 1], val * minDp[i - 1]);
    minDp[i] = Math.min(val, val * maxDp[i - 1], val * minDp[i - 1]);
  }

  return Math.max(...maxDp);
};
