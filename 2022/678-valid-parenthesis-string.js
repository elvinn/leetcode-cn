// https://leetcode-cn.com/problems/valid-parenthesis-string

/**
 * 单栈/双栈均可完成，用双栈存储元素下标的话逻辑会简化不少
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  const leftCharStack = []
  const startStack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    switch (char) {
      case '(':
        leftCharStack.push(i)
        break
      case '*':
        startStack.push(i)
        break
      case ')':
        if (leftCharStack.length > 0) {
          leftCharStack.pop()
        } else if (startStack.length > 0) {
          startStack.pop()
        } else {
          return false
        }
        break
      default:
        break
    }
  }

  while (leftCharStack.length > 0) {
    if (!startStack.length) {
      return false
    }

    const leftCharIndex = leftCharStack.pop()
    const starCharIndex = startStack.pop()
    if (leftCharIndex > starCharIndex) {
      return false
    }
  }

  return true
}
