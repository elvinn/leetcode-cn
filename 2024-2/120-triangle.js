// https://leetcode.cn/problems/triangle/description/?envType=study-plan-v2&envId=dynamic-programming

const MAX_VAL = 10000;
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  if (triangle.length === 1) {
    return triangle[0][0];
  }

  let preMemo = Array(triangle.length).fill(MAX_VAL);
  let curMemo = Array(triangle.length).fill(MAX_VAL);

  preMemo[0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    const curRow = triangle[i];
    curMemo[0] = preMemo[0] + curRow[0];
    for (let j = 1; j <= i; j++) {
      curMemo[j] = Math.min(preMemo[j - 1], preMemo[j]) + curRow[j];
    }

    let temp = preMemo;
    preMemo = curMemo;
    curMemo = temp.fill(MAX_VAL);
  }

  return Math.min(...preMemo);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]));

