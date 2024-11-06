// https://leetcode.cn/problems/generate-parentheses/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = [];
  const strLen = 2 * n;
  // leftNum 表示在 currentStr 中，左括号减去右括号的数量
  const visit = (leftNum = 0, currentStr = '') => {
    if (currentStr.length === strLen) {
      if (leftNum === 0) {
        result.push(currentStr);
      }
      return;
    }

    if (leftNum > n) {
      return;
    }

    if (leftNum === 0) {
      visit(leftNum + 1, currentStr + '(');
    } else {
      visit(leftNum + 1, currentStr + '(');
      visit(leftNum - 1, currentStr + ')');
    }
  };

  visit();

  return result;
};

console.log(generateParenthesis(3));
