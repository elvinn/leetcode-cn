// https://leetcode.cn/problems/combination-sum/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = [];

  const visit = (path = [], startIndex = 0, leftTarget = target) => {
    for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i];
      const sub = leftTarget - num;
      if (sub === 0) {
        result.push([...path, num]);
      } else if (sub > 0) {
        visit([...path, num], i, sub);
      }
    }
  };

  visit();
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([4, 2, 8], 8));
