// https://leetcode-cn.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const v1List = version1.split('.').map(v => parseInt(v))
  const v2List = version2.split('.').map(v => parseInt(v))

  const maxLength = Math.max(version1.length, version2.length)

  for (let i = 0; i < maxLength; i++) {
    const v1 = v1List[i] || 0
    const v2 = v2List[i] || 0

    if (v1 > v2) {
      return 1
    } else if (v1 < v2) {
      return -1
    }
  }

  return 0
}
