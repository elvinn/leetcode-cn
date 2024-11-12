// https://leetcode.cn/problems/daily-temperatures/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const stack = [];
  const n = temperatures.length;
  const result = Array(n).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const num = temperatures[i];
    while (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (temperatures[top] >= num) {
        break;
      }

      result[top] = i - top;
      stack.pop();
    }

    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
