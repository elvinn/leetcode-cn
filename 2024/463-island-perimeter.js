// https://leetcode.cn/problems/island-perimeter/description/

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
const islandPerimeter = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let perimeter = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (grid[i][j] !== 1) {
        // 非陆地格子，不计算周长
        continue;
      }

      steps.forEach((step) => {
        if (grid[i + step.x]?.[j + step.y] !== 1) {
          perimeter += 1;
        }
      })
    }
  }

  return perimeter;
};