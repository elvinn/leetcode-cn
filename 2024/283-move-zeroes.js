// https://leetcode.cn/problems/move-zeroes/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let j = 0; // 非 0 的个数

  // 非 0 元素移动到正确位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    nums[j] = nums[i];
    j += 1;
  }

  // 尾部全设置为 0
  for (let i = j ; i < nums.length; i++) {
    nums[i] = 0;
  }
};