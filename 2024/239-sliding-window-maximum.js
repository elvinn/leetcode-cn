// https://leetcode.cn/problems/sliding-window-maximum/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  const queue = []; // 存储下标
  for (let i = 0; i < k; i++) {
    while (queue.length) {
      const lastIndex = queue[queue.length - 1];
      if (nums[lastIndex] <= nums[i]) {
        queue.pop();
      } else {
        break;
      }
    }
    queue.push(i);
  }

  const result = [nums[queue[0]]];
  for (let i = k; i < nums.length; i++) {
    while (queue.length) {
      const lastIndex = queue[queue.length - 1];
      if (nums[lastIndex] <= nums[i]) {
        queue.pop();
      } else {
        break;
      }
    }

    while (queue.length && queue[0] + k <= i) {
      queue.shift();
    }
    queue.push(i);
    result.push(nums[queue[0]]);
  }

  return result;
};
