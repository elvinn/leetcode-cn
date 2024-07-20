// https://leetcode.cn/problems/max-area-of-island/description/

const steps = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dfs = (x, y) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols) {
      // 越界
      return 0;
    }

    if (visited[x][y]) {
      return 0;
    }

    visited[x][y] = true;

    if (grid[x][y] === 0) {
      return 0;
    }

    let area = 1;
    steps.forEach((step) => area += dfs(x + step.x, y + step.y));

    return area;
  }

  let maxArea = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  return maxArea;
};

