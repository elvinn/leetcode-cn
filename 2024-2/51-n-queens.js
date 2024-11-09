// https://leetcode.cn/problems/n-queens/description/?envType=study-plan-v2&envId=top-100-liked

const directions = [
  { dx: 0, dy: 1 },
  { dx: 1, dy: 1 },
  { dx: 1, dy: 0 },
  { dx: 1, dy: -1 },
  { dx: 0, dy: -1 },
  { dx: -1, dy: -1 },
  { dx: -1, dy: 0 },
  { dx: -1, dy: 1 },
];

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 初始化棋盘，0 表示未落子，1 表示落子
  const board = [];
  for (let i = 0; i < n; i++) {
    board[i] = Array(n).fill(0);
  }

  const result = [];

  // 在 (x, y) 上的皇后，不会碰到其它皇后
  const isValid = (x, y) => {
    for (const { dx, dy } of directions) {
      let newX = x;
      let newY = y;
      while (true) {
        newX += dx;
        newY += dy;
        if (newX < 0 || newX >= n || newY < 0 || newY >= n) {
          break;
        }
        if (board[newX][newY] === 1) {
          // 说明该方向有其它棋子
          return false;
        }
      }
    }

    return true;
  };

  const visit = (rowIndex) => {
    if (rowIndex === n) {
      // 说明获得一种解法
      const solution = [];
      for (let i = 0; i < n; i++) {
        const rowString = board[i].map((x) => x === 1 ? 'Q' : '.').join('');
        solution.push(rowString);
      }
      result.push(solution);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(rowIndex, i)) {
        board[rowIndex][i] = 1;
        visit(rowIndex + 1);
        board[rowIndex][i] = 0;
      }
    }
  };

  visit(0);

  return result;
};

console.log(solveNQueens(1));
console.log(solveNQueens(4));