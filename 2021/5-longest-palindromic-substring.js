// https://leetcode-cn.com/problems/longest-palindromic-substring/

const reverseStr = (s) => {
  return s.split('').reverse().join('')
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const length = s.length
  const note = []
  note[0] = { start: 0, end: 0 }
  note[1] = s[0] === s[1] ? { start: 0, end: 1 } : { start: 0, end: 0 }

  for (let i = 2; i < length; i++) {
    const last = note[i - 1]
    const lastLength = last.end - last.start + 1

    let newLeft = Math.max(0, i - lastLength - 1)
    let newString = s.substring(newLeft, i + 1)
    if (newString === reverseStr(newString)) {
      note[i] = { start: newLeft, end: i }
      continue
    }

    newLeft = Math.max(0, i - lastLength)
    newString = s.substring(newLeft, i + 1)
    if (newString === reverseStr(newString)) {
      note[i] = { start: newLeft, end: i }
      continue
    }

    note[i] = note[i - 1]
  }

  return s.substring(note[length - 1].start, note[length - 1].end + 1)
}
