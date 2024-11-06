// https://leetcode.cn/problems/permutations/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  if (nums.length <= 1) {
    return [nums];
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const newArray = [...nums];
    newArray.splice(i, 1);
    const subResult = permute(newArray);
    subResult.forEach((item) => result.push([nums[i], ...item]));
  }

  return result;
};

// console.log(permute([1,2,3]));
console.log(permute([0, 1]));