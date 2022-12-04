// https://leetcode.cn/problems/palindrome-partitioning/


/**
 * 思路：回溯 + 动态规划
 * 动态规划用来判断是否是回文串
 * 回溯来保证不会重复添加进结果数组
 */

var partition = function(s) {

  function dfs(i){
    if (i === n) {
        ret.push(ans.slice());
        return;
    }
    for (let j = i; j < n; j++) {
        if (dp[i][j]) {
            ans.push(s.slice(i, j + 1));
            dfs(j + 1);
            ans.pop();
        }
    }
  }

  function getDp(s) {
    const length = s.length;
    const dp = Array.from({ length }, (item, index) => {
      return Array.from({ length }, (_item, _index) => {
          return index === _index;
      })
    })
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
        }
    }
    return dp;
  }

  const dp = getDp(s);
  let n = s.length;
  let ret = [];
  let ans = [];
  dfs(0);
  return ret;
}

console.log(partition('aab'));
