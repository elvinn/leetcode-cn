// https://leetcode.cn/problems/longest-valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  if (s.length <= 1) {
    return 0;
  }

  // 备忘录，记录当下标为 i 时，合法的最长括号表达式长度
  const dp = [0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      dp[i] = 0;
      continue;
    }

    let sum = 0;
    let j = i;
    while (true) {
      sum += dp[j - 1];
      j = j - dp[j - 1] - 1;
      if (dp[j] === 0 || j < 0) {
        // 说明不必要往左再探索
        dp[i] = s[j] === '(' ? sum + 2 + (dp[j - 1] || 0) : 0;
        break;
      }
    }
  }

  return Math.max(...dp);
};

console.log(longestValidParentheses('(()')); // 2
console.log(longestValidParentheses(')()())')); // 4
console.log(longestValidParentheses('()()')); // 6
console.log(longestValidParentheses('())')); // 2
