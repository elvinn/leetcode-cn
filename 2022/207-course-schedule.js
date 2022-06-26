// https://leetcode.cn/problems/course-schedule/

/**
 * 1. 图算法题
 * 2. 入度 / 出度 / 临接表
 * 3. 通俗易懂的题解 https://leetcode.cn/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const inList = Array.from({ length: numCourses }).fill(0)
  const map = {}

  for (const [x, y] of prerequisites) {
    inList[x] += 1

    if (map[y]) {
      map[y].push(x)
    } else {
      map[y] = [x]
    }
  }

  const queue = []
  for (let i = 0; i < inList.length; i++) {
    // 入度为 0，即没有依赖的点
    if (inList[i] === 0) {
      queue.push(i)
    }
  }

  let count = 0
  while (queue.length > 0) {
    const current = queue.pop()
    count += 1
    const nodeList = map[current]
    if (!nodeList) {
      continue
    }

    for (const index of nodeList) {
      inList[index] -= 1
      if (inList[index] === 0) {
        queue.push(index)
      }
    }
  }

  return count === numCourses
}