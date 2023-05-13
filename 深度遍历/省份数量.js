// https://leetcode.cn/problems/number-of-provinces/description/?envType=study-plan-v2&id=leetcode-75


/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {

  const set = new Set(); //已经遍历到的城市

  let sums = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!set.has(i)) {
      dfs(isConnected[i]);
      sums += 1;
    }
  }

  function dfs(cities) {
    for (let i = 0; i < cities.length; i++) {
      if (!set.has(i) && cities[i] === 1) {
        set.add(i);
        // 🔴🔴这是重点。只要发现该城市与其他城市有联系，就深挖该城市
        dfs(isConnected[i]);
      }
    }
  }

  return sums;
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));