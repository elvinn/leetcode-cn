// https://leetcode-cn.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  if (nums.length === 1) {
    return [[nums[0]]]
  }

  const result = [[nums[0]]]

  const helper = (index) => {
    if (index === nums.length) {
      return
    }

    const char = nums[index]
    const lastResultLength = result.length
    for (let i = 0; i < lastResultLength; i++) {
      const s = result.shift()
      for (let j = 0; j <= s.length; j++) {
        result.push([...s.slice(0, j), char, ...s.slice(j)])
      }
    }

    helper(index + 1)
  }

  helper(1)

  return result
}
