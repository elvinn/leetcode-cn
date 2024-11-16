// https://leetcode.cn/problems/maximum-product-subarray/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (nums.length === 0) {
    return nums[0];
  }

  // 记录结尾元素下标为 i 时，非空子数组乘积的最大值
  const maxDp = [nums[0]];
  // 记录结尾元素下标为 i 时，非空子数组乘积的最小值
  const minDp = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    if (val > 0) {
      maxDp[i] = maxDp[i - 1] > 0 ? val * maxDp[i - 1] : val;
      minDp[i] = minDp[i - 1] < 0 ? val * minDp[i - 1] : val;
    } else if (val === 0) {
      maxDp[i] = 0;
      minDp[i] = 0;
    } else {
      maxDp[i] = minDp[i - 1] < 0 ? val * minDp[i - 1] : val;
      minDp[i] = maxDp[i - 1] > 0 ? val * maxDp[i - 1] : val;
    }
  }

  return Math.max(...maxDp);
};

console.log(maxProduct([1])); // 1
console.log(maxProduct([2, 3])); // 6
console.log(maxProduct([2, -1, 3])); // 3
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0