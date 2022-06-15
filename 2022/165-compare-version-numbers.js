// https://leetcode.cn/problems/compare-version-numbers

const parseFirstNumber = (version = '', startIndex = 0) => {
  if (startIndex >= version.length) {
    return [0, version.length]
  }

  let value = 0
  for (let i = startIndex; i < version.length; i++) {
    const char = version[i]

    if (char === '.') {
      return [value, i + 1]
    }

    value = value * 10 + char - '0'
  }

  return [value, version.length]
}

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  let value1 = 0
  let index1 = 0
  let value2 = 0
  let index2 = 0
  while (index1 < version1.length || index2 < version2.length) {
    ([value1, index1] = parseFirstNumber(version1, index1));
    ([value2, index2] = parseFirstNumber(version2, index2))

    if (value1 !== value2) {
      return value1 > value2 ? 1 : -1
    }
  }

  return 0
}

console.log(compareVersion('0.1', '1.1'))
