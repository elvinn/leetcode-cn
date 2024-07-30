// https://leetcode.cn/problems/house-robber/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + (dp[i - 2] || 0));
  }

  return dp[nums.length - 1];
};