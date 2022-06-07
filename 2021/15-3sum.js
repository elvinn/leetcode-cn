// https://leetcode-cn.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return []
  }

  const result = []
  const n = nums.length

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    if (nums[i] > 0) {
      break
    }

    const target = -nums[i]

    let left = i + 1
    let right = n - 1
    while (left < right) {
      const sum = nums[left] + nums[right]
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1
        }

        left += 1
        right -= 1
      } else if (sum < target) {
        left += 1
      } else if (sum > target) {
        right -= 1
      }
    }
  }

  return result
}
