// https://leetcode-cn.com/problems/next-greater-element-ii/

// 输入: nums = [1,2,1]
// 输出: [2,-1,2]

// 输入: nums = [1,2,3,4,3]
// 输出: [2,3,4,-1,4]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  const stack = []
  const result = Array.from({ length: nums.length }).fill(-1)
  const n = nums.length

  for (let i = 0; i < n * 2 - 1; i++) {
    const num = nums[i % n]

    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
      const topIndex = stack.pop()
      result[topIndex] = num
    }

    stack.push(i % n)
  }

  return result
}

console.log(nextGreaterElements([1, 2, 3, 4, 3]))
