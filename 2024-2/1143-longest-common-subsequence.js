// https://leetcode.cn/problems/longest-common-subsequence/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // dp[i][j] 表示 text1[0...i] 和 text2[0...j] 的最长公共子串
  const dp = [];

  // 初始化第一列
  let hasSame = false;
  for (let i = 0; i < m; i++) {
    if (!hasSame && text1[i] === text2[0]) {
      hasSame = true;
    }

    dp[i] = [hasSame ? 1 : 0];
  }

  // 初始化第一行
  hasSame = false;
  for (let j = 0; j < n; j++) {
    if (!hasSame && text1[0] === text2[j]) {
      hasSame = true;
    }

    dp[0][j] = hasSame ? 1 : 0;
  }

  // 进行动态规划
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m - 1][n - 1];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'def'));
