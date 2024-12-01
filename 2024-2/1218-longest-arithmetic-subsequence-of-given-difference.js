// https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function (arr, difference) {
  if (arr.length === 1) {
    return 1;
  }

  const dp = new Map();
  let result = 0;

  for (const num of arr) {
    const len = (dp.get(num - difference) || 0) + 1;
    dp.set(num, len);
    result = Math.max(len, result);
  }

  return result;
};

console.assert(longestSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2) === 4);