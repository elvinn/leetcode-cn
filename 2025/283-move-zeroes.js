// https://leetcode.cn/problems/move-zeroes/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let leftIndex = 0;
  let rightIndex = 0;

  const n = nums.length;
  while (rightIndex < n) {
    // 左指针移动到下一个 0
    while (leftIndex < n) {
      if (nums[leftIndex] !== 0) {
        leftIndex++;
      } else {
        break;
      }
    }

    // 右指针移动到下一个不为 0
    if (rightIndex <= leftIndex) {
      rightIndex = leftIndex + 1;
    }

    while (rightIndex < n) {
      if (nums[rightIndex] === 0) {
        rightIndex++;
      } else {
        break;
      }
    }

    if (rightIndex >= n) {
      break;
    }

    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = 0;
  }
};
