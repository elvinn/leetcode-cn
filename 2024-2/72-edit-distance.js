// https://leetcode.cn/problems/edit-distance/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // dp[i][j] 表示 word1[0...i] 变成 word2[0...j] 所需要的最短操作
  const dp = [];
  for (let i = 0; i <= m; i++) {
    // 初始化第一列
    dp[i] = [i];
  }

  for (let j = 1; j <= n; j++) {
    // 初始化第一行
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        word1[i-1] === word2[j-1] ? dp[i - 1][j - 1] : dp[i - 1][j - 1] + 1,
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
      );
    }
  }

  return dp[m][n];
};

console.log(minDistance('', 'abc')); // 3
console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('ab', 'a')); // 1
console.log(minDistance('sea', 'eat')); // 2
