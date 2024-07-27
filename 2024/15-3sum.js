// https://leetcode.cn/problems/3sum/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    const val = nums[i];
    if (val > 0) {
      break;
    }

    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = nums[leftIndex] + nums[rightIndex] + val;
      if (sum === 0) {
        const combination = [val, nums[leftIndex], nums[rightIndex]];
        result.push(combination);
        while (nums[leftIndex] === combination[1]) {
          leftIndex += 1;
        }
        while (nums[rightIndex] === combination[2]) {
          rightIndex -= 1;
        }

        if (leftIndex >= rightIndex) {
          break;
        }
      } else if (sum < 0) {
        leftIndex += 1;
      } else {
        rightIndex -= 1;
      }
    }
  }

  return result;
};
