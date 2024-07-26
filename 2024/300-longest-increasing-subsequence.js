// https://leetcode.cn/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (!nums.length) {
    return 0;
  }
  const memo = [1];
  for (let i = 1; i < nums.length; i++) {
    let maxLen = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxLen = Math.max(maxLen, memo[j] + 1);
      }
    }

    memo[i] = maxLen;
  }

  return Math.max(...memo);
};

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])) // 4