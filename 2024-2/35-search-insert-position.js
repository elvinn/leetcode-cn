// https://leetcode.cn/problems/search-insert-position/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 范围[left, right)
  const binarySearch = (left, right) => {
    const middle = Math.floor((left + right) / 2);
    const value = nums[middle];

    if (left > right) {
      return;
    }
    if (value === target) {
      return middle;
    } else if (value < target) {
      if (left === right) {
        return left + 1;
      }
      return binarySearch(Math.min(middle + 1, right), right);
    } {
      if (left === right) {
        return left;
      }
      return binarySearch(left, Math.max(left, middle - 1));
    }
  }

  return binarySearch(0, nums.length);
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
