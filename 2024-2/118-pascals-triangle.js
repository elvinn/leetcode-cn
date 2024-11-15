// https://leetcode.cn/problems/pascals-triangle/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = [[1]];
  while (result.length < numRows) {
    const lastRow = result[result.length - 1];

    const newLen = lastRow.length + 1;
    const newRow = Array(newLen);
    newRow[0] = 1
    newRow[newLen - 1] = 1
    for (let i = 1; i < newRow.length - 1; i++) {
      newRow[i] = lastRow[i - 1] + lastRow[i];
    }

    result.push(newRow);
  }

  return result;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
