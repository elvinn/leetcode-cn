// https://leetcode.cn/problems/longest-palindromic-substring/description/

function palindrome(s, left, right) {
  while (left >= 0 && right <= s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  return s.slice(left + 1, right)
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let longestS = '';
  for (let i = 0; i < s.length; i += 1) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    if (s1.length > longestS.length) {
      longestS = s1;
    }

    if (s2.length > longestS.length) {
      longestS = s2;
    }
  }

  return longestS;
};
