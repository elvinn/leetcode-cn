// https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  if (nums.length === 1) {
    return 1;
  }

  const maxLenList = [1]; // 以 nums[i] 为最后一个元素的最长递增子序列长度
  const countList = [1]; // 以 nums[i] 为最后一个元素的最长递增子序列的组合个数

  for (let i = 1; i < nums.length; i++) {
    let maxLen = 0;
    let count = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (maxLen < maxLenList[j]) {
          maxLen = maxLenList[j];
          count = countList[j];
        } else if (maxLen === maxLenList[j]) {
          count += countList[j];
        }
      }
    }
    maxLenList[i] = maxLen + 1; // 把自己算上
    countList[i] = count;
  }

  let result = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxLenList[i] > maxLenList[maxIndex]) {
      maxIndex = i;
      result = countList[i];
    } else if (maxLenList[i] === maxLenList[maxIndex]) {
      result += countList[i];
    }
  }

  return result;
};

console.assert(findNumberOfLIS([1, 3, 5, 4, 7]) === 2);
console.assert(findNumberOfLIS([2, 2, 2, 2, 2]) === 5);
console.assert(findNumberOfLIS([1,2,4,3,5,4,7,2]) === 3);