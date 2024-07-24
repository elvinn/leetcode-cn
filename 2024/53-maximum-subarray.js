// https://leetcode.cn/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxSum = -Number.MAX_VALUE;
  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      // 当前和小于 0，重新构建子数组
      currentSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray([-1]));