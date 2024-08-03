// https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let [x, y] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [begin, end] = intervals[i];

    if (begin <= y) {
      y = Math.max(y, end);
    } else {
      result.push([x, y]);
      x = begin;
      y = end;
    }
  }
  result.push([x, y]);

  return result;
};
