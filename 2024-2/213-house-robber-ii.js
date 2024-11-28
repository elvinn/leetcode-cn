// https://leetcode.cn/problems/house-robber-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  // 范围是 [start, end)
  const subRob = (start, end) => {
    if (end - start === 1) {
      // 只有一个元素，提前返回
      return nums[start];
    }

    let n_2 = 0;
    let n_1 = nums[start];
    let max = 0;
    for (let i = start + 1; i < end; i++) {
      max = Math.max(n_1, n_2 + nums[i]);
      n_2 = n_1;
      n_1 = max;
    }

    return max;
  };

  return Math.max(
    subRob(0, nums.length - 1),
    subRob(1, nums.length),
  );
};

console.log(rob([0, 0]));
