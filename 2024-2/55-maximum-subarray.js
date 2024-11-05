// https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 只要和不小于 0，就继续累加
    // 若和小于 0，则重新开始
    sum = Math.max(sum, 0);
    sum += nums[i];
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
