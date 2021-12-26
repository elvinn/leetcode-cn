// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const charSet = new Set()
  let max = 0
  let right = -1
  for (let i = 0; i < s.length; i++) {
    while (right + 1 < s.length && !charSet.has(s[right + 1])) {
      right += 1
      charSet.add(s[right])
    }

    max = Math.max(max, charSet.size)
    charSet.delete(s[i])
  }

  return max
}
