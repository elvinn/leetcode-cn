// https://leetcode.cn/problems/palindrome-partitioning/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const n = s.length;

  // 记录 s[x] - s[y] 是否为回文字符串
  // 0 尚未确定，-1 不是，1 是
  const notes = [];
  for (let i = 0; i < n; i++) {
    notes[i] = Array(n).fill(0)
  }


  const result = [];
  const path = [];

  const visit = (i) => {
    if (i === n) {
      result.push([...path]);
      return;
    }

    for (let j = i; j < n; j++) {
      if (isMatch(i, j) === 1) {
        path.push(s.slice(i, j + 1));
        visit(j + 1);
        path.pop();
      }
    }
  };

  const isMatch = (i, j) => {
    if (notes[i][j] !== 0) {
      // 已有的结果
      return notes[i][j];
    }

    if (i >= j) {
      notes[i][j] = 1
    } else if (s[i] === s[j]) {
      notes[i][j] = isMatch(i + 1, j - 1);
    } else {
      notes[i][j] = -1;
    }

    return notes[i][j];
  }

  visit(0);
  return result;
};

console.log(partition('aab'));
