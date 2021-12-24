// https://leetcode-cn.com/problems/longest-valid-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let leftCount = 0
  let rightCount = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(') {
      leftCount++
    } else if (char === ')') {
      rightCount++
    }

    if (leftCount === rightCount) {
      max = Math.max(max, rightCount)
    } else if (leftCount < rightCount) {
      leftCount = 0
      rightCount = 0
    }
  }

  leftCount = 0
  rightCount = 0
  for (let i = s.length; i >= 0; i--) {
    const char = s[i]
    if (char === '(') {
      leftCount++
    } else if (char === ')') {
      rightCount++
    }

    if (leftCount === rightCount) {
      max = Math.max(max, leftCount)
    } else if (leftCount > rightCount) {
      leftCount = 0
      rightCount = 0
    }
  }

  return max * 2
}

console.log(longestValidParentheses('(()'))
