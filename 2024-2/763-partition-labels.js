// https://leetcode.cn/problems/partition-labels/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
  // 先找出每一个字母的最左侧和最右侧下标
  const charMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charMap[char]) {
      charMap[char] = { left: i, right: i };
    } else {
      charMap[char].right = i;
    }
  }

  const result = [];
  let right = 0;
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap[char].right >= right) {
      right = charMap[char].right;
    }

    if (i === right) {
      result.push(right - startIndex + 1);
      startIndex = i + 1;
    }
  }

  return result;
};

console.log(partitionLabels('a')); // [1]
console.log(partitionLabels('abc')); // [1, 1, 1]
console.log(partitionLabels('abca')); // [4]
console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9, 7, 8]
console.log(partitionLabels('eccbbbbdec')); // [10]
