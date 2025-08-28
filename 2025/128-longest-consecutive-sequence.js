/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) {
    return 0;
  }

  const map = {};
  let min = nums[0];
  let max = nums[0];
  
  nums.forEach((n) => {
    map[n] = 1
    min = Math.min(min, n);
    max = Math.max(max, n);
  });

  let maxLen = 1;
  for (const n of nums) {
    if (!map[n]) {
      // 已经遍历过
      continue;
    }

    let currentLen = 1;

    // 先向小数遍历，再向大数遍历
    for (let i = n - 1; i >= min; i--) {
      if (map[i]) {
        currentLen++;
        map[i] = 0; // 0 表示已访问过
      } else {
        break;
      }
    }

    for (let j = n + 1; j <= max; j++) {
      if (map[j]) {
        currentLen++;
        map[j] = 0; // 0 表示已访问过
      } else {
        break;
      }
    }

    maxLen = Math.max(maxLen, currentLen);
  }

  return maxLen;
};
