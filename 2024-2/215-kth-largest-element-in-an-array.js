// https://leetcode.cn/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  // 从 [left, right] 中选出第 k 大的数字
  const quickSelect = (left, right) => {
    if (left === right) {
      return nums[k - 1];
    }

    const pivot = nums[left];
    let i = left - 1;
    let j = right + 1;
    while (i < j) {
      do { i++; } while (nums[i] > pivot)
      do { j--; } while (nums[j] < pivot)

      if (i < j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }

    // 为什么这里用 j 而不用 i？
    // 因为选择的最左边的 i 作为 pivot，可能会导致陷入死循环
    if (k <= j + 1) {
      return quickSelect(left, j);
    } else {
      return quickSelect(j + 1, right);
    }
  };

  return quickSelect(0, nums.length - 1);
};

console.log(findKthLargest([1, 2], 1));
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3,1,2,4], 2));
