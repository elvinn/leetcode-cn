// https://leetcode-cn.com/problems/interleaving-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
  if (s3.length !== (s1.length + s2.length)) {
    return false
  }

  if (!s1) {
    return s2 === s3
  }

  if (!s2) {
    return s1 === s3
  }

  // DP 思路
  // f(i, j) = [f(i - 1, j) && s1[i - 1] === s3[i + j - 1]]
  //            || f(i, j - 1) && s2[j - 1] === s3[i + j - 1]

  const dp = new Array(s1.length + 1)
    .fill(null)
    .map(() => new Array(s2.length + 1).fill(false))

  dp[0][0] = true

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i > 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = true
        continue
      }

      if (j > 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = true
      }
    }
  }

  return dp[s1.length][s2.length]
}
