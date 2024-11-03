// https://leetcode.cn/problems/trapping-rain-water/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const len = height.length;
  const leftMax = [height[0]];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = [height[len - 1]];
  for (let i = len - 2; i >= 0; i--) {
    rightMax.unshift(Math.max(height[i], rightMax[0]));
  }

  let result = 0;
  for (let i = 0; i < len; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4,2,0,3,2,5]));
