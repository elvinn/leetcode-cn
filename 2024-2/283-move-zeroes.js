// https://leetcode.cn/problems/move-zeroes/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  // 首先找到第一个 0 的下标
  let i = 0;
  while (i < nums.length && nums[i] !== 0) {
    i += 1;
  }

  let j = i + 1;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      // 找到不为 0 的数字，移动到下标 i
      nums[i] = nums[j];
      i += 1;
    }

    j += 1;
  }

  while (i < nums.length) {
    nums[i] = 0;
    i += 1;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
