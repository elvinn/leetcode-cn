// https://leetcode.cn/problems/minimum-window-substring/?envType=study-plan-v2&envId=top-100-liked

const isValid = (subCharMap, tCharMap) => {
  for (const char in tCharMap) {
    if (typeof subCharMap[char] === 'undefined') {
      // 说明没有这个字符
      return false;
    }

    if (subCharMap[char] < tCharMap[char]) {
      // 说明字符数量不够
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (s.length < t.length) {
    return '';
  }

  let minLen = Number.MAX_SAFE_INTEGER;
  let result = '';

  const tCharMap = {};
  for (const char of t) {
    if (typeof tCharMap[char] === 'undefined') {
      tCharMap[char] = 0;
    }

    tCharMap[char] += 1;
  }

  const subCharMap = {};

  for (let left = 0, right = 0; left < s.length - t.length, right < s.length;) {
    // 先向右移动 right，使子串符合条件
    while (!isValid(subCharMap, tCharMap)) {
      if (typeof subCharMap[s[right]] === 'undefined') {
        subCharMap[s[right]] = 0;
      }

      subCharMap[s[right]] += 1;
      right++;

      if (right >= s.length && !isValid(subCharMap, tCharMap)) {
        // 说明已经没有符合条件的子串
        return result;
      }
    }

    // 再向右移动 left，直到子串不符合条件
    while (isValid(subCharMap, tCharMap)) {
      subCharMap[s[left]] -= 1;
      left++;
    }

    const currentLen = right - left + 1;
    if (currentLen < minLen) {
      result = s.substring(left - 1, right);

      if (currentLen === t.length) {
        return result;
      } else {
        minLen = currentLen;
      }
    }
  }

  return result;
};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // 'BANC'
console.log(minWindow('aaa', 'a')); // 'a'
console.log(minWindow('a', 'b')); // ''
