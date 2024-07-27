// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if (a + b === target) {
        return [i, j];
      }
    }
  }

  throw new Error('impossible');
};