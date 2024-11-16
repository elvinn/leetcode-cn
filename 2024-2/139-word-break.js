// https://leetcode.cn/problems/word-break/?envType=study-plan-v2&envId=top-100-liked
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  // 备忘录，格式为 子串 -> 能否被拆分
  var memo = { '': true };

  const dp = (string) => {
    if (typeof memo[string] !== 'undefined') {
      return memo[string];
    }

    let result = false;
    for (const word of wordDict) {
      if (string.startsWith(word)) {
        result = dp(string.slice(word.length));
        if (result === true) {
          memo[string] = true;
          return true;
        }
      }
    }

    memo[string] = false;
    return false;
  };

  return dp(s);
};

console.log(wordBreak('abc', ['a'])); // false
console.log(wordBreak('leetcode', ['leet', 'code'])); // true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); // false
console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']));