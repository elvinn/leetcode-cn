// https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let n_1 = nums[0];
  let n_2 = 0;
  for (let i = 1; i < nums.length; i++) {
    const newN = Math.max(n_1, n_2 + nums[i]);
    n_2 = n_1;
    n_1 = newN;
  }

  return n_1;
};

console.log(rob([1, 3])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12