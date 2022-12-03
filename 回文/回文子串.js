// https://leetcode.cn/problems/palindromic-substrings/

/**
 * 思路：动态规划
 * dp[i][j]是回文串，即dp[i+1][j-1]是回文串且s[i] === s[j]
 */


var countSubstrings = function(s) {
  const length = s.length;
  if (length === 1) {
      return 1;
  }
  if (length === 2) {
      return s[0] === s[1] ? 3 : 2;
  }
  const dp = Array.from({ length }, (item, index) => {
      return Array.from({ length }, (_item, _index) => {
          return index === _index;
      })
  })

  let result = length;
  for (let n = 2; n <= length; n++) {
      for (let i = 0; i < length; i++) {
          const j = n + i -1;
          if (j > length - 1) {
              break;
          }
          if (j - i === 1) {
              dp[i][j] = s[j] === s[i];
          } else {
              dp[i][j] = dp[i+1][j-1] ? s[j] === s[i] : false;
          }
          if (dp[i][j]) {
              result += 1;
          }
      }
  }
  return result; 
};