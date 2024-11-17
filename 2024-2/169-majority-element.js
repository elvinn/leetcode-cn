// https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let count = 0;
  let candidate = undefined;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3]));