// https://leetcode-cn.com/problems/longest-substring-with-at-most-two-distinct-characters/

/**
 * 利用双指针的滑动窗口实现比较简单
 * @param {stirng} s
 * @returns {number}
 */
const lengthOfLongestSubstringTwoDistinct = (s) => {
  let result = 0
  const charMap = new Map()
  let left = 0
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1)
      continue
    }
    if (charMap.size < 2) {
      charMap.set(char, 1)
      continue
    }

    result = Math.max(result, right - left)
    while (left <= right) {
      const leftChar = s[left]
      charMap.set(leftChar, charMap.get(leftChar) - 1)
      left += 1

      if (charMap.get(leftChar) <= 0) {
        charMap.delete(leftChar)
        break
      }
    }
  }

  result = Math.max(result, s.length - left)
  return result
}
