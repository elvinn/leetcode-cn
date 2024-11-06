// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-100-liked

const charMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  const result = [];

  const visit = (str = '', index = 0) => {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }

    const chars = charMap[digits[index]];
    for (let j = 0; j < chars.length; j++) {
      visit(str + chars[j], index + 1);
    }
  }

  visit();
  return result;
};

console.log(letterCombinations('23'));
