// https://leetcode.cn/problems/subarray-sum-equals-k/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  let preMap = new Map([[0, 1]]);
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (preMap.has(pre - k)) {
      result += preMap.get(pre - k);
    }

    preMap.set(pre, (preMap.get(pre) || 0) + 1);
  }

  return result;
};