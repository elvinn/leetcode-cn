// https://leetcode.cn/problems/thousand-separator/

/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
  const nString = `${n}`.split('').reverse().join('');
  let result = '';
  for (let i = 0; i < nString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result += '.';
    }
    result += nString[i];
  }

  return result.split('').reverse().join('');
};
