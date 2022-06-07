// https://leetcode-cn.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const notes = Array.from({ length: nums.length }).fill(false)
  notes[0] = true

  for (let i = 0; i < nums.length; i++) {
    if (!notes[i]) {
      continue
    }

    for (let j = 1; j <= nums[i]; j++) {
      notes[i + j] = true
    }
  }

  return notes[nums.length - 1]
}
