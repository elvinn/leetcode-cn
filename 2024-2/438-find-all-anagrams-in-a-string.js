// https://leetcode.cn/problems/find-all-anagrams-in-a-string/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const charMap = {};
  // 统计 p 中每个字符的个数
  p.split('').forEach((char) => charMap[char] = charMap[char] ? charMap[char] + 1 : 1);

  // 先遍历 s 的第一个子串，计算字符差异
  for (let i = 0; i < p.length; i++) {
    const char = s[i];
    if (typeof charMap[char] === 'undefined') {
      charMap[char] = -1;
    } else {
      charMap[char] -= 1;
    }
  }

  // 判断是不是异位词
  const isAnagram = () => {
    const values = Object.values(charMap);
    return values.every(item => item === 0);
  }

  const result = [];
  if (isAnagram()) {
    result.push(0);
  }

  for (let i = 1; i <= s.length - p.length; i++) {
    charMap[s[i - 1]] += 1;
    const newChar = s[i + p.length - 1];
    if (typeof charMap[newChar] === 'undefined') {
      charMap[newChar] = -1;
    } else {
      charMap[newChar] -= 1;
      if (isAnagram()) {
        result.push(i);
      }
    }
  }

  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('baa', 'aa'));
