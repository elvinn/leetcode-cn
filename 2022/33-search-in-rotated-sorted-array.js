// https://leetcode.cn/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  /**
   * 搜寻 target 在 [left, right) 中的下标
   * @param {number} left 左边界（包含）
   * @param {number} right 有边界（不包含）
   */
  const helper = (left, right) => {
    if (left < 0 || right > nums.length) {
      return -1
    }

    if (left === right || left + 1 === right) {
      return nums[left] === target ? left : -1
    }

    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
      return middle
    }

    // 左半部一直递增
    if (nums[left] <= nums[middle]) {
      if (target >= nums[left] && target <= nums[middle]) {
        return helper(left, middle)
      }

      return helper(middle + 1, right)
    }

    // 右半部一直递增
    if (target >= nums[middle] && target <= nums[right - 1]) {
      return helper(middle + 1, right)
    }

    return helper(left, middle)
  }

  return helper(0, nums.length)
}

console.log(search([1, 7], 7))
