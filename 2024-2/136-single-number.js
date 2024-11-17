// https://leetcode.cn/problems/single-number/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function(nums) {
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

console.log(singleNumber([1, 2, 2]));
