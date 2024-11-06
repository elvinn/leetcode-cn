// https://leetcode.cn/problems/subsets/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  const path = [];
  const visited = Array(nums.length).fill(false);

  const visitFn = (initialIndex = 0) => {
    if (path.length === nums.length) {
      // 说明此条路全部遍历完
      return;
    }

    for (let i = initialIndex; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;

      path.push(nums[i]);
      result.push([...path]);

      // 为了避免重复，从下一个开始
      visitFn(i + 1);

      path.pop();
      visited[i] = false;
    }
  };

  visitFn();
  return result;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
