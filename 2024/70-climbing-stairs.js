// https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a = 1; // n = 0
  let b = 1; // n = 1
  let temp;
  for (let i = 1; i < n; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};