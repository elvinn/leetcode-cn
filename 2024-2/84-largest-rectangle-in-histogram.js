// https://leetcode.cn/problems/largest-rectangle-in-histogram/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  const n = heights.length;

  // 单调栈，存储下标
  let stack = [];

  // 存储当前元素向左，第一个比它小的元素下标
  const leftIndexList = [];
  for (let i = 0; i < n; i++) {
    const currentVal = heights[i];
    while (stack.length > 0) {
      const topIndex = stack[stack.length - 1];
      if (heights[topIndex] >= currentVal) {
        stack.pop();
      } else {
        break;
      }
    }
    leftIndexList[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack = [];

  // 存储当前元素向右，第一个比它小的元素下标
  const rightIndexList = [];
  for (let i = n - 1; i >= 0; i--) {
    const currentVal = heights[i];
    while (stack.length > 0) {
      const topIndex = stack[stack.length - 1];
      if (heights[topIndex] >= currentVal) {
        stack.pop();
      } else {
        break;
      }
    }
    rightIndexList[i] = stack.length > 0 ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const y = heights[i];
    const x = rightIndexList[i] - leftIndexList[i] - 1;
    result = Math.max(result, x * y);
  }

  return result;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([0, 9]));
