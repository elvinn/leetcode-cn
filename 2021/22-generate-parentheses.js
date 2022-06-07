// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = []

  const helper = (left, right, str = '') => {
    if (left === 0 && right === 0) {
      result.push(str)
      return
    }

    if (left < right) {
      helper(left, right - 1, str + ')')

      if (left > 0) {
        helper(left - 1, right, str + '(')
      }
    } if (left === right) {
      helper(left - 1, right, str + '(')
    }
  }

  helper(n, n)

  return result
}
