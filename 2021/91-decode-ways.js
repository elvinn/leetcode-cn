// https://leetcode-cn.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  if (!s.length || s[0] === '0') {
    return 0
  }

  const dp = []
  dp[0] = 1
  for (let i = 0; i < s.length; i++) {
    dp[i + 1] = 0

    if (s[i] !== '0') {
      dp[i + 1] += dp[i]
    }

    const lastTwoValue = i === 0 ? 0 : parseInt(s.substring(i - 1, i + 1))
    if (lastTwoValue >= 10 && lastTwoValue <= 26) {
      dp[i + 1] += dp[i - 1]
    }
  }

  return dp[s.length]
}
