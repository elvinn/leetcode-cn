// https://leetcode.cn/problems/word-break/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  const wordSet = new Set();
  wordDict.forEach((word) => wordSet.add(word));

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};