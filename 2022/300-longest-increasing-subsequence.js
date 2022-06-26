// https://leetcode.cn/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  const dp = [1]
  for (let i = 1; i < nums.length; i++) {
    let max = 0
    const num = nums[i]
    for (let j = 0; j < i; j++) {
      if (num > nums[j]) {
        max = Math.max(max, dp[j])
      }
    }
    dp[i] = max + 1
  }

  let result = dp[0]
  for (let i = 1; i < nums.length; i++) {
    result = Math.max(result, dp[i])
  }

  return result
}
