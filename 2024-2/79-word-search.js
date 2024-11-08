// https://leetcode.cn/problems/word-search/?envType=study-plan-v2&envId=top-100-liked

const directions = [
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1},
]

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;

  const visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const isSame = (x, y, wordIndex) => {
    if (wordIndex === word.length) {
      return true;
    }

    if (x < 0 || y < 0 || x >= m || y >= n) {
      // 访问不在棋盘内的坐标
      return false;
    }

    if (visited[x][y]) {
      // 重复反问，不能走回头路
      return false;
    }

    if (board[x][y] !== word[wordIndex]) {
      // 字符不相等
      return false;
    }

    visited[x][y] = true;
    for (const dir of directions) {
      if (isSame(x + dir.dx, y + dir.dy, wordIndex + 1)) {
        return true;
      }

    }
    visited[x][y] = false;

    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isSame(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(exist(
  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
  "ABCCED",
));

console.log(exist(
  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
  "ABCB"
));
