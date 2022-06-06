// https://leetcode-cn.com/problems/longest-palindromic-substring/

const reverseStr = (s) => {
  return s.split('').reverse().join('')
}

const findMaxLength = (s, left, right) => {
  while(left >=0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  return right - left - 1;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (!s) {
    return '';
  }

  if (s.length === 1) {
    return s;
  }

  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = findMaxLength(s, i, i);
    const len2 = findMaxLength(s, i, i + 1);
    const currentMax = Math.max(len1, len2);
    if (currentMax <= (right - left + 1)) {
      continue;
    }

    left = Math.ceil(i - (currentMax - 1) / 2)
    right = Math.floor(i + currentMax / 2);
  }

  console.log(left, right)
  return s.substring(left, right + 1);
}
