// https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const lProduct = [1];
  for (let i = 1; i < nums.length; i++) {
    lProduct.push(nums[i - 1] * lProduct[i - 1]);
  }

  const rProduct = [1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rProduct.unshift(nums[i + 1] * rProduct[0]);
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(lProduct[i] * rProduct[i]);
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
