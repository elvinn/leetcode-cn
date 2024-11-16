// https://leetcode.cn/problems/longest-palindromic-substring/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  // 获得从中心 [left, right] 向两边扩散的最长子串
  const getLongStrFromCenter = (left, right) => {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  let longestStr = '';
  for (let i = 0; i < s.length; i++) {
    const substring1 = getLongStrFromCenter(i, i);
    const substring2 = getLongStrFromCenter(i, i + 1);
    if (substring1.length > longestStr.length) {
      longestStr = substring1;
    }

    if (substring2.length > longestStr.length) {
      longestStr = substring2;
    }
  }

  return longestStr;
};

console.log(longestPalindrome('aa'));
console.log(longestPalindrome('ab'));
console.log(longestPalindrome('babad'));
