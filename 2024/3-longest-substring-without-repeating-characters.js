// https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let leftIndex = 0;
  let max = 0;

  const charSet = new Set();
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const char = s[rightIndex];
    if (!charSet.has(char)) {
      max = Math.max(rightIndex - leftIndex + 1, max);
    } else {
      while (leftIndex < rightIndex && charSet.has(char)) {
        charSet.delete(s[leftIndex]);
        leftIndex += 1;
      }
    }

    charSet.add(char);
  }

  return max;
};
