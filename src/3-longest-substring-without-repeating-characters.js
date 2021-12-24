// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const charSet = new Set()
  let max = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (charSet.has(s[j])) {
        break
      }
      charSet.add(s[j])
      max = Math.max(max, charSet.size)
    }
    charSet.clear()
  }
  return max
}

