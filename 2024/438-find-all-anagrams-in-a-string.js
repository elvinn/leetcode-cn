// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  }

  const sChars = Array(26).fill(0);
  const pChars = Array(26).fill(0);

  const isAnagram = () => {
    for (let i = 0; i < 26; i++) {
      if (sChars[i] !== pChars[i]) {
        return false;
      }
    }

    return true;
  }

  const result = [];

  const aCode = 'a'.charCodeAt(0);
  for (let i = 0; i < p.length; i++) {
    ++sChars[s.charCodeAt(i) - aCode];
    ++pChars[p.charCodeAt(i) - aCode];
  }

  if (isAnagram()) {
    result.push(0);
  }

  const steps = s.length - p.length;
  for (let i = 0; i < steps; i++) {
    --sChars[s.charCodeAt(i) - aCode];
    ++sChars[s.charCodeAt(i + p.length) - aCode];

    if (isAnagram()) {
      result.push(i + 1);
    }
  }

  return result;
};