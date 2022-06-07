// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s) {
    return 0;
  }

  const charSet = new Set();
  let result = 0;
  let right = -1;
  for (let i = 0; i < s.length; i++) {
    while (right + 1 < s.length && !charSet.has(s[right + 1])) {
      right += 1;
      charSet.add(s[right]);
    }
    result = Math.max(result, charSet.size);
    charSet.delete(s[i]);
  }

  return result;
}
