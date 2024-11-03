// https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let max = 0;
  for (let left = 0, right = height.length - 1; left < right;) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    max = Math.max((right - left) * Math.min(leftHeight, rightHeight), max);
    if (leftHeight <= rightHeight) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
