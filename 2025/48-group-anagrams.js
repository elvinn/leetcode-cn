// https://leetcode.cn/studyplan/top-100-liked/

/**
 * 将字符串 str 按照统一的规则计算自定义 hash（各字母出现的次数）
 * 
 * aab -> a2b1
 * abcdd -> a1b1c1d2
 * 
 * @param {string} str
 */
const calculateHash = (str) => {
  const charMap = {};
  for (const char of str) {
    if (!charMap[char]) {
      charMap[char] = 0;
    }

    charMap[char] += 1;
  }

  const sortedArray = Object.entries(charMap).sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
  let hash = '';
  for (const [char, count] of sortedArray) {
    hash += `${char}${count}`;
  }

  return hash;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const hashMap = {};
  for (const str of strs) {
    const hash = calculateHash(str);
    if (!hashMap[hash]) {
      hashMap[hash] = [];
    }
    hashMap[hash].push(str);
  }

  return Object.values(hashMap);
};
