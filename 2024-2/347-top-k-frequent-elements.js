// https://leetcode.cn/problems/top-k-frequent-elements/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  // 频率作为下标，数字作为内容
  const bucket = Array(nums.length + 1);
  for (const [key, value] of Object.entries(map)) {
    if (!bucket[value]) {
      bucket[value] = [Number(key)];
    } else {
      bucket[value].push(Number(key));
    }
  }

  const result = [];
  for (let i = nums.length; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }

    if (result.length >= k) {
      return result.slice(0, k);
    }
  }
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
