// https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
  if (s.length < k) {
    return 0
  }

  const charMap = {}

  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1
  }

  let divider // 分割符
  const chars = Object.keys(charMap)
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (charMap[char] < k) {
      divider = char
      break
    }
  }

  if (!divider) {
    return s.length
  }

  return s.split(divider)
    .reduce(
      (max, substr) => Math.max(max, longestSubstring(substr, k)),
      0
    )
}
