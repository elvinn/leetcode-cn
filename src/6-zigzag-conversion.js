// https://leetcode-cn.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const rowTotal = Math.min(s.length, numRows)

  if (rowTotal === 1) {
    return s
  }

  // 存放每一行的字符串
  const stringRows = new Array(rowTotal).fill('')

  // 每组容纳的字符个数
  const interval = 2 * numRows - 2

  // true 表示向下移动，false 表示向上移动
  let isDown = true

  // 当前行下标
  let rowIndex = 0
  for (let i = 0; i < s.length; i++) {
    stringRows[rowIndex] += s[i]

    // 判断是否反向
    if (i % interval === rowTotal - 1) {
      isDown = false
    } else if (i % interval === 0) {
      isDown = true
    }

    rowIndex += isDown ? 1 : -1
  }

  return stringRows.join('')
}
