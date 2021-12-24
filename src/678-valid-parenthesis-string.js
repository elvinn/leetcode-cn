// https://leetcode-cn.com/problems/valid-parenthesis-string/

/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  const leftStack = [] // 左括号栈，存放 * 下标
  const starStack = [] // 通配符栈，存放 * 下标

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    switch (char) {
      case '(':
        leftStack.push(i)
        break
      case ')':
        if (leftStack.length > 0) {
          leftStack.pop()
        } else if (starStack.length > 0) {
          starStack.pop()
        } else {
          return false
        }
        break
      case '*':
        starStack.push(i)
        break
    }
  }

  while (leftStack.length > 0 && starStack.length > 0) {
    const starIndex = starStack.pop()
    if (leftStack.pop() > starIndex) {
      return false
    }
  }

  return leftStack.length === 0
}
