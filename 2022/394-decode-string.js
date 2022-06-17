// https://leetcode.cn/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  const stack = []

  for (const char of s) {
    if (char !== ']') {
      stack.push(char)
      continue
    }

    const alphabetList = []
    let numberStr = ''
    while (stack.length > 0) {
      const popChar = stack.pop()

      if (popChar >= '0' && popChar <= '9') {
        numberStr = popChar + numberStr
        continue
      }

      if (numberStr !== '') {
        // 数字匹配完毕之后，退m出循环
        stack.push(popChar)
        break
      }

      if (popChar === '[') {
        continue
      }

      // 此时 popChar 一定为数字
      alphabetList.unshift(popChar)
    }

    const times = parseInt(numberStr)
    for (let i = 0; i < times; i++) {
      stack.push(...alphabetList)
    }
  }

  return stack.join('')
}
