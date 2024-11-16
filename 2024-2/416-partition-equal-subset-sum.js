// https://leetcode.cn/problems/partition-equal-subset-sum/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sum = nums.reduce((cur, prev) => cur + prev);
  if (sum % 2 === 1) {
    // 奇数，肯定不可分
    return false;
  }

  // 备忘录，避免重复递归
  const memo = {};

  // 表示在 [0, rightIndex]  的数组中，能否有和为 aim 的子集
  const visit = (rightIndex, aim) => {
    if (aim < 0) {
      return false;
    }

    const key = `${rightIndex}_${aim}`;
    if (typeof memo[key] !== 'undefined') {
      // 已经递归过
      return memo[key];
    }

    if (rightIndex === 0) {
      // 递归到根节点
      return aim === nums[0];
    }

    memo[key] = visit(rightIndex - 1, aim) || visit(rightIndex - 1, aim - nums[rightIndex]);
    return memo[key];
  }


  const result = visit(nums.length - 1, sum / 2);
  return result;
};

console.log(canPartition([1, 1]));
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
