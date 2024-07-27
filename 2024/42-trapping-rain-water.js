// https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const leftMaxList = []; // leftMaxList[i] 表示下表 i 左边柱子的最高高度
  leftMaxList[0] = height[0];
  for (let i = 1; i < height.length - 1; i++) {
    leftMaxList[i] = Math.max(height[i], leftMaxList[i - 1]);
  }

  const rightMaxList = []; // rightMaxList[i] 表示下表 i 右边柱子的最高高度
  rightMaxList[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i > 0; i--) {
    rightMaxList[i] = Math.max(height[i], rightMaxList[i + 1]);
  }

  let result = 0;
  for (let i = 1; i < height.length - 1; i++) {
    result += Math.min(leftMaxList[i], rightMaxList[i]) - height[i];
  }
  return result;
};