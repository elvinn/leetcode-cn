// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  if (k === 0) {
    return nums;
  }

  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k , n - 1);
  return nums;
};
