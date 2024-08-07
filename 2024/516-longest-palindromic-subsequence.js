// https://leetcode.cn/problems/longest-palindromic-subsequence/description/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const n = s.length;
  const dp = Array.from({ length: n + 1}, () => Array(n+1).fill(0));
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
      if (i > j) {
        // 此时为 0
        continue;
      }
      if (i === j) {
        dp[i][j] = 1
      } else if (s[i - 1] === s[j - 1]) {
        dp[i][j] = (dp[i + 1][j - 1] || 0) + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[1][n];
};
