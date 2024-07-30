// https://leetcode.cn/problems/pascals-triangle/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  const result = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    const lastRow = result[i-2];
    const row = Array(i);
    row[0] = 1;
    row[i - 1] = 1;
    for (let j = 1; j < i - 1; j++) {
      row[j] = lastRow[j - 1] + lastRow[j];
    }

    result.push(row);
  }

  return result;
};