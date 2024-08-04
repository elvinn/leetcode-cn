// https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);
  let headProduct = 1; // 前向成绩
  let tailProduct = 1; // 后向乘机
  for (let i = 0; i < n; i++) {
    let j = n - i - 1;
    result[i] *= headProduct;
    result[j] *= tailProduct;
    headProduct *= nums[i];
    tailProduct *= nums[j];
  }

  return result;
};