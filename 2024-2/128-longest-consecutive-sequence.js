// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numSet = new Set(nums);

  let max = 0;
  for (const num of nums) {
    if (!numSet.has(num)) {
      continue;
    }

    let len = 1;

    // 删除避免重复遍历
    numSet.delete(num);

    // 从 num-- 开始寻找
    let subNum = num - 1;
    while (numSet.has(subNum)) {
      len += 1;
      numSet.delete(subNum);
      subNum -= 1;
    }

    // 从 num++ 开始寻找
    let addNum = num + 1;
    while (numSet.has(addNum)) {
      len += 1;
      numSet.delete(addNum);
      addNum += 1;
    }

    max = Math.max(max, len);
  }

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
