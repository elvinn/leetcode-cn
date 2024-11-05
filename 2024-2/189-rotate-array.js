// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  // 将 nums 中下标从 start 到 end 的元素反转（两端都包括）
  const reverse = (start, end) => {
    for (let l = start, r = end; l < r; l++, r--) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
    }
  };

  k = k % nums.length;
  nums.reverse();
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};