// https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set();
  nums.forEach((num) => set.add(num));

  let max = 0;
  for (const num of nums) {
    if (set.has(num - 1)) {
      continue;
    }

    let current = num;
    let len = 0;
    while (set.has(current)) {
      len += 1;
      current += 1;
    }

    max = Math.max(max, len);
  }

  return max;
};