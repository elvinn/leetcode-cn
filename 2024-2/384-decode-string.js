// https://leetcode.cn/problems/decode-string/?envType=study-plan-v2&envId=top-100-liked

const isNumber = (char) => char >= '0' && char <= '9';
const isAlpha = (char) => char >= 'a' && char <= 'z';

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stack = [];
  let number = '';

  for (const char of s) {
    if (isAlpha(char)) {
      stack.push(char);
    } else if (isNumber(char)) {
      number += char;
    } else if (char === '[') {
      stack.push(Number(number));
      stack.push('[')
      number = '';
    } else if (char === ']') {
      let temp = [];
      while (true) {
        const topChar = stack.pop();
        if (topChar === '[') {
          const times = stack.pop();
          stack.push(temp.reverse().join('').repeat(times));
          break;
        } else {
          temp.push(topChar);
        }
      }
    }
  }

  return stack.join('');
};

console.log(decodeString('3[a]2[bc]'));
