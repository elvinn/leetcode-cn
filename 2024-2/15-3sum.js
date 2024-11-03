// https://leetcode.cn/problems/3sum/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 避免重复
      continue;
    }

    const sum = -nums[i];
    for (let left = i + 1, right = nums.length - 1; left < right;) {
      const leftVal = nums[left];
      const rightVal = nums[right];
      const twoSum = leftVal + rightVal;
      if (twoSum < sum) {
        while (leftVal === nums[left]) {
          left += 1;
        }
      } else if (twoSum > sum) {
        while (rightVal === nums[right]) {
          right -= 1;
        }
      } else {
        result.push([nums[i], leftVal, rightVal]);
        while (leftVal === nums[left]) {
          left += 1;
        }
        while (rightVal === nums[right]) {
          right -= 1;
        }
      }
    }
  }

  return result;
};

