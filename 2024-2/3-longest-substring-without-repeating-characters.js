// https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let left = 0;
  let right = 0;
  let maxLen = 1;
  const charSet = new Set();
  while (left <= right && right < s.length) {
    while (!charSet.has(s[right]) && right < s.length) {
      charSet.add(s[right]);
      right += 1;
    }

    maxLen = Math.max(right - left, maxLen);

    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
