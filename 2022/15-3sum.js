// https://leetcode.cn/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) {
    return []
  }

  const sortedNums = nums.sort((a, b) => a - b)
  const n = sortedNums.length
  const result = []

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue
    }

    const x = sortedNums[i]
    let k = n - 1
    for (let j = i + 1; j < k; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
        continue
      }

      while (j < k && x + sortedNums[j] + sortedNums[k] > 0) {
        k -= 1
      }

      if (j === k) {
        break
      }

      if (x + sortedNums[j] + sortedNums[k] === 0) {
        result.push([x, sortedNums[j], sortedNums[k]])
      }
    }
  }

  return result
}
