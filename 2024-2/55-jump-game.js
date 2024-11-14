// https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let max = 0; // 最远能到达的下标
  for (let i = 0; i <= max && i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);
  }

  return max >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false