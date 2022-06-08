// https://leetcode-cn.com/problems/valid-parenthesis-string

/**
 * 用单栈导致复杂度有些高了，双栈存储元素下标的话逻辑会简化不少
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  const charStack = [];

  for (const char of s) {
    if (['(', '*'].includes(char)) {
      charStack.push(char);
      continue;
    }

    let isMatched = false;
    let tempStarCount = 0; // 临时取出的 '*' 数量
    while(charStack.length > 0) {
      const popChar = charStack.pop();
      if (popChar === '(') {
        isMatched = true;
        break;
      }
      
      if (popChar === '*') {
        tempStarCount += 1;
        continue;
      }

      // popChar 为 '('
      if (!tempStarCount) {
        return false;
      }

      charStack.push(popChar);
      break;
    }
    if (!isMatched) {
      if (!tempStarCount) {
        return false;
      }

      tempStarCount -= 1;
    }

    charStack.push(...Array.from({ length: tempStarCount }).fill('*'));
  }

  let leftOneCount = 0;
  for (const char of charStack) {
    if (char === '(') {
      leftOneCount += 1;
    }

    if (char === '*') {
      leftOneCount = Math.max(0, leftOneCount - 1);
    }
  }

  return leftOneCount === 0;
};