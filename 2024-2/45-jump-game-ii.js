// https://leetcode.cn/problems/jump-game-ii/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let jumpNum = 0;
  let i = 0;
  while (i < nums.length - 1) {
    const distance = nums[i];
    if (nums[i] + i >= nums.length - 1) {
      return jumpNum + 1;
    }

    // 选下一跳能最远的元素，作为当前跳的选择
    let maxDistance = 0;
    let maxIndex = 0; // 取得 maxDistance 时对应的下标
    for (let j = i + 1; j <= i + distance; j++) {
      if (nums[j] + j > maxDistance) {
        maxDistance = nums[j] + j;
        maxIndex = j;
      }
    }

    jumpNum += 1;
    i = maxIndex;
  }

  return jumpNum;
};

console.log(jump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0])); // 2
console.log(jump([1, 2, 1, 1, 1])); // 3
console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([3, 2, 1])); // 1
console.log(jump([2, 3, 1])); // 1
