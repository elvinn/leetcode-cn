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
  for (let i = 1; i < s.length; i++) {
    const char = s[i]
    const lastChar = s[i - 1]
    const lastTwo = parseInt(lastChar + char, 10)

    if (char === '0') {
      if (lastChar === '1' || lastChar === '2') {
        dp[i] = (dp[i - 2] || 1)
      } else {
        return 0
      }
    } else if (lastChar === '0' || lastTwo > 26) {
      dp[i] = dp[i - 1]
    } else if (lastTwo <= 26) {
      dp[i] = dp[i - 1] + (dp[i - 2] || 1)
    } else {
      return 0
    }
  }

  return dp[s.length - 1]
}

console.log(numDecodings('27'))