// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {};
  nums.forEach((value, index) => {
    if (!numMap[value]) {
      numMap[value] = [index];
    } else {
      numMap[value].push(index);
    }
  })

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const diff = target - value;
    const indexList = numMap[diff];
    if (!indexList) {
      // 没有另外一个数加起来为 target
      continue;
    }

    if (value === diff) {
      if (indexList.length === 1) {
        // value 为 target 的一半，且没有另外一个相等的数
        continue;
      }
      return [indexList[0], indexList[1]];
    } 

    return [i, indexList[0]];
  }

  // 没有匹配的情况，按题目描述不存在此情况
  return undefined;
};