// https://leetcode-cn.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const wordMap = {}
  wordDict.forEach(word => {
    wordMap[word] = true
  })

  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordMap[s.substring(j, i)]) {
        dp[i] = true
        break
      }
    }
  }

  console.log(dp)
  return dp[s.length]
}
