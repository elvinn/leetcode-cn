// https://leetcode.cn/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  // 记录以 nums[i] 结尾的子序列的最大长度
  const dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
console.log(lengthOfLIS([0,1,0,3,2,3])); // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); // 1