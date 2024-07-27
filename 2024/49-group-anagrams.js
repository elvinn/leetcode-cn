// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked

function getKey(str) {
  const charObj = {};
  for (const char of str) {
    if (!charObj[char]) {
      charObj[char] = 0;
    }

    charObj[char] += 1;
  }

  let key = '';
  Object.keys(charObj).sort().forEach((char) => {
    key += `${char}${charObj[char]}`;
  })

  return key;
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = {};
  for (const str of strs) {
    const key = getKey(str);
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(str);
  }

  return Object.values(result);
};