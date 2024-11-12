// https://leetcode.cn/problems/valid-parentheses/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const leftChars = ['(', '[', '{'];
  const rightCharMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (leftChars.includes(char)) {
      stack.push(char);
      continue;
    }

    const stackTop = stack.pop();
    const target = rightCharMap[char];
    if (stackTop !== target) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'));