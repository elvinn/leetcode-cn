// https://leetcode.cn/problems/sort-colors/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let n = nums.length;
  let p0 = 0; // 指向应放置 0 的下标
  let p2 = n - 1; // 指向应放置 2 的下标

  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let i = 0; i <= p2; i++) {
    while (nums[i] === 2 && i <= p2) {
      swap(i, p2);
      p2 -= 1;
    }

    if (nums[i] === 0) {
      swap(i, p0);
      p0 += 1;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));