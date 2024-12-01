// https://leetcode.cn/problems/maximum-length-of-pair-chain/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  pairs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  if (pairs.length === 1) {
    return 1;
  }

  // 以 pairs[i] 作为链的最后一个元素时，对应的链长度
  const dp = [1];

  for (let i = 1; i < pairs.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1; // 把自己算上
  }

  return Math.max(...dp);
};

console.assert(findLongestChain([[1, 2], [2, 3], [3, 4]]) === 2);
console.assert(findLongestChain([[1,2],[7,8],[4,5]]) === 3);