// https://leetcode.cn/problems/partition-equal-subset-sum/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return false;
  }

  let sum = 0;
  let max = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, num);
  }

  if (sum % 2 != 0) {
    return false;
  }

  const target = sum / 2;
  if (target < max) {
    return false;
  }

  const dp = Array.from({ length: len }, () => []);
  for (let i = 0; i < len; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= target; j++) {
      const val = nums[i];
      if (val > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - val];
      }
    }

    if (dp[i][target]) {
      return true;
    }
  }

  return false;
};
