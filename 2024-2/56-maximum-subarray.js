// https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let [left, right] = intervals[0];

  for (i = 1; i < intervals.length; i++) {
    const item = intervals[i]
    if (item[1] <= right) {
      // 说明 item 被当前 (left, right) 包含
      continue;
    } else if (item[0] <= right) {
      // 说明 item 和当前 (left, right) 有重合
      right = item[1];
    } else {
      // 说明 item 和当前 (left, right) 没有重合
      result.push([left, right]);
      left = item[0];
      right = item[1];
    }
  }

  result.push([left, right]);

  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))