// https://leetcode.cn/problems/sliding-window-maximum/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const queue = [];
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
  }

  const result = [nums[queue[0]]];

  for (let i = k; i < nums.length; i++) {
    if (queue[0] <= i - k) {
      // 说明已经不在滑动窗口内
      queue.shift();
    }

    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);

    result.push(nums[queue[0]]);
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))