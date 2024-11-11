// https://leetcode.cn/problems/search-a-2d-matrix/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 找到恰好 row[0] <= target 的行
  const searchForRow = () => {
    let low = -1;
    let high = matrix.length - 1;

    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      const val = matrix[mid][0];
      if (val <= target) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }

    return low;
  };

  const searchInRow = () => {
    const row = matrix[rowIndex];
    let left = 0;
    let right = row.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const val = row[mid];
      if (val === target) {
        return true;
      } else if (val < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }

  const rowIndex = searchForRow();
  if (rowIndex < 0) {
    return false;
  }

  return searchInRow();
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
console.log(searchMatrix([[1, 3]], 3));

