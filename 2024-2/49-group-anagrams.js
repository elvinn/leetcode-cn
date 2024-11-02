// https://leetcode.cn/problems/group-anagrams/?envType=study-plan-v2&envId=top-100-liked

const aCharCode = 'a'.charCodeAt(0);

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const resultMap = {};
  for (const str of strs) {
    const charList = new Array(26).fill(0);
    for (const char of str) {
      charList[char.charCodeAt(0) - aCharCode] += 1;
    }
    if (!resultMap[charList]) {
      resultMap[charList] = [];
    }

    resultMap[charList].push(str);
  }

  return Object.values(resultMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
