// https://leetcode.cn/problems/solving-questions-with-brainpower/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
  const n = questions.length;
  if (n === 1) {
    return questions[0][0];
  }

  const dp = Array(n).fill(0);
  dp[n - 1] = questions[n - 1][0];

  for (let i = n - 2; i >= 0; i--) {
    dp[i] = Math.max(
      dp[i + 1], // 不做第 i 个题目
      questions[i][0] + (dp[i + questions[i][1] + 1] || 0), // 做第 i 个题目
    );
  }

  return dp[0];
};

console.assert(mostPoints([[12,46],[78,19],[63,15],[79,62],[13,10]]));
console.assert(mostPoints([[3,2],[4,3],[4,4],[2,5]]));
