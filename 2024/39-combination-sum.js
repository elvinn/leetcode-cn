// https://leetcode.cn/problems/combination-sum/description/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  const result = [];
  const dfs = (startIndex, sum, path) => {
    if (sum < 0) {
      return;
    }

    if (sum === 0) {
      result.push(path);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      dfs(i, sum - candidates[i], [...path, candidates[i]]);
    }
  };

  dfs(0, target, []);

  return result;
}

