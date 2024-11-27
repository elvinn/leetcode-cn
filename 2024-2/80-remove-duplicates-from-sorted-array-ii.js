// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let beforeVal = null;
  let sameTimes = 1;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    const curVal = nums[j];
    if (beforeVal === curVal) {
      sameTimes += 1;
      if (sameTimes > 2) {
        // 最多只允许 2 个一样的
        continue;
      }
    } else {
      sameTimes = 1;
    }

    beforeVal = curVal;
    nums[i] = nums[j];
    i += 1;
  }


  return i;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
