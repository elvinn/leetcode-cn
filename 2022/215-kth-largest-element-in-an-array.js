// https://leetcode-cn.com/problems/kth-largest-element-in-an-array


const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const partition = (nums, left, right) => {
  const partition = Math.floor((Math.random() * (right - left) + 0.5 + left));
  swap(nums, partition, right);

  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (nums[j] >= nums[right]) {
      i += 1;
      swap(nums, i, j)
    }
  }

  i += 1;
  swap(nums, i, right);

  return i;
}

const quickSelect = (nums, left, right, k) => {
  if (left === right) {
    return nums[left];
  }

  const pivotIndex = partition(nums, left, right);

  if (pivotIndex + 1 === k) {
    return nums[pivotIndex];
  }

  return pivotIndex + 1 > k ? quickSelect(nums, left, pivotIndex - 1, k) : quickSelect(nums, pivotIndex + 1, right, k);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};


