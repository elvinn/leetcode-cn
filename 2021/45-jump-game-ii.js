// https://leetcode-cn.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  // O(n^2) time, O(n) space
  const leastStepList = [0] // 记录跳到每一位置的最小步数

  for (let i = 1; i < nums.length; i++) {
    let minStep = Infinity
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        minStep = Math.min(minStep, leastStepList[j] + 1)
      }
    }
    leastStepList[i] = minStep
  }

  return leastStepList[nums.length - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump2 = function (nums) {
  // O(n) time, O(1) space
  let step = 0 // 挑的步数
  let maxPos = 0 // 能跳到的最远距离
  let end = 0 // 上次能跳到的最右边界

  for (let i = 0; i < nums.length - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i)

    if (i === end) {
      step += 1
      end = maxPos
    }
  }

  return step
}
