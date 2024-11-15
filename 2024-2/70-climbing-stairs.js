// https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let n_2 = 0;
  let n_1 = 1;
  let i = 1;
  while (i < n) {
    let sum = n_1 + n_2;
    n_2 = n_1;
    n_1 = sum;

    i += 1;
  }

  return n_1 + n_2;
};

console.log(climbStairs(2));
console.log(climbStairs(3));