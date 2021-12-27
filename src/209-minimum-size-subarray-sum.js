// https://leetcode-cn.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0
  while (right < nums.length) {
    sum += nums[right]

    while (sum >= target) {
      min = Math.min(min, right - left + 1)
      sum -= nums[left]
      left += 1
    }

    right += 1
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min
}
