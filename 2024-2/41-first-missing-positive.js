// https://leetcode.cn/problems/first-missing-positive/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  // 先全部变成正数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }

  // 对应位置的数据变成负数
  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i]);
    if (n <= nums.length) {
      const index = n - 1;
      nums[index] = -Math.abs(nums[index]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

