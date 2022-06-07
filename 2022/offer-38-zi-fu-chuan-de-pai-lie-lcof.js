// https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/

/**
 * @param {string} s
 * @return {string[]}
 */
const permutation = function(s) {
  if (!s) {
    return [];
  }

  let lastSet = new Set(s[0]);
  for (let i = 1; i < s.length; i++) {
    const newSet = new Set();
    const char = s[i];
    for (const str of lastSet) {
      for (let j = 0; j <= str.length; j++) {
        newSet.add(`${str.slice(0, j)}${char}${str.slice(j, str.length)}`);
      }
    }

    lastSet = newSet;
  }

  return [...lastSet];
};
