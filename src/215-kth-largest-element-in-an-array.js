// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

const swap = (nums, i, j) => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

// 原地排序后返回 pivot 下标
const partition = (nums, left, right) => {
  if (left === right) {
    return left
  }

  const pivot = nums[left]
  let i = left
  let j = right
  while (i < j) {
    while (i < j && nums[j] <= pivot) {
      j--
    }

    while (i < j && nums[i] >= pivot) {
      i++
    }

    if (i < j) {
      swap(nums, i, j)
    }
  }

  swap(nums, left, i)

  return i
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  // 分治
  let index = -1
  let left = 0
  let right = nums.length - 1
  while (index !== k - 1) {
    index = partition(nums, left, right)

    if (index < k - 1) {
      left = index + 1
    } else {
      right = index - 1
    }
  }

  return nums[index]
}
