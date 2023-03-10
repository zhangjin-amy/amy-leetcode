// https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/description/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  if (!grid.length) {
      return 0;
  }

  //🟢m和n的顺序不要搞反

  let n = grid.length;
  let m = grid[0].length;

  let dp = Array.from({
      length: n
  }, () => Array.from({
      length: m
  }, () => 0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
      dp[0][i] = dp[0][i-1] + grid[0][i];
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.max(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j]);
    }
  }

  return dp[n-1][m-1];
};