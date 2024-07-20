// https://leetcode.cn/problems/number-of-islands/description/

const steps = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dfs = (x, y) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols) {
      // 越界
      return;
    }

    if (visited[x][y]) {
      // 当前节点已经访问过
      return;
    }

    visited[x][y] = true;

    if (grid[x][y] === '0') {
      // 当前节点非陆地
      return;
    }

    // 继续找寻当前岛屿内的节点
    steps.forEach((step) => dfs(x + step.x, y + step.y));
  };

  let sum = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      sum += dfs(i, j);
    }
  }

  return sum;
}

numIslands([["1","1","0","0 ","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])