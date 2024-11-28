// https://leetcode.cn/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const maxVal = Math.max(...nums);
  const sumArray = Array(maxVal + 1).fill(0);

  for (const num of nums) {
    sumArray[num] += num;
  }

  if (sumArray.length === 1) {
    return sumArray[0];
  }

  let n_2 = 0;
  let n_1 = sumArray[0];
  let max = 0;
  for (let i = 1; i < sumArray.length; i++) {
    max = Math.max(n_1, n_2 + sumArray[i]);
    n_2 = n_1;
    n_1 = max;
  }
  return max;
};

console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
console.log(deleteAndEarn([1, 8, 5, 9, 6, 9, 4, 1, 7, 3, 3, 6, 3, 3, 8, 2, 6, 3, 2, 2, 1, 2, 9, 8, 7, 1, 1, 10, 6, 7, 3, 9, 6, 10, 5, 4, 10, 1, 6, 7, 4, 7, 4, 1, 9, 5, 1, 5, 7, 5]))
console.log(deleteAndEarn([10, 8, 4, 2, 1, 3, 4, 8, 2, 9, 10, 4, 8, 5, 9, 1, 5, 1, 6, 8, 1, 1, 6, 7, 8, 9, 1, 7, 6, 8, 4, 5, 4, 1, 5, 9, 8, 6, 10, 6, 4, 3, 8, 4, 10, 8, 8, 10, 6, 4, 4, 4, 9, 6, 9, 10, 7, 1, 5, 3, 4, 4, 8, 1, 1, 2, 1, 4, 1, 1, 4, 9, 4, 7, 1, 5, 1, 10, 3, 5, 10, 3, 10, 2, 1, 10, 4, 1, 1, 4, 1, 2, 10, 9, 7, 10, 1, 2, 7, 5]))
console.log(deleteAndEarn([12,32,93,17,100,72,40,71,37,92,58,34,29,78,11,84,77,90,92,35,12,5,27,92,91,23,65,91,85,14,42,28,80,85,38,71,62,82,66,3,33,33,55,60,48,78,63,11,20,51,78,42,37,21,100,13,60,57,91,53,49,15,45,19,51,2,96,22,32,2,46,62,58,11,29,6,74,38,70,97,4,22,76,19,1,90,63,55,64,44,90,51,36,16,65,95,64,59,53,93]))
