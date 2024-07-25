// https://leetcode.cn/problems/compare-version-numbers/description/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function(version1, version2) {
  const nums1 = version1.split('.');
  const nums2 = version2.split('.');

  const maxLength = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < maxLength; i++) {
    const num1 = Number(nums1[i]) || 0;
    const num2 = Number(nums2[i]) || 0;
    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};