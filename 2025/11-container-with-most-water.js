// https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftIndex = 0;;
  let rightIndex = height.length - 1;
  
  let maxArea = 0;

  while (leftIndex < rightIndex) {
    const h = Math.min(height[leftIndex], height[rightIndex]);
    maxArea = Math.max(h * (rightIndex - leftIndex), maxArea);

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxArea;
};