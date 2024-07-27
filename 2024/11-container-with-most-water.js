// https://leetcode.cn/problems/container-with-most-water/?envType=study-plan-v2&envId=top-100-liked


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];
    const min = Math.min(leftVal, rightVal);
    const distance = right - left;
    max = Math.max(max, min * distance);

    if (leftVal < rightVal) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
};