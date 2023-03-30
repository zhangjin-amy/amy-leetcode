/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
  if (n === 1) {
      return 5;
  }
  if (n === 2) {
      return 20;
  }

  n = n % 2 === 0 ? n / 2 : (n - 1) / 2;
  const dfs = function(x, n) {
      if (n === 1) {
          return x;
      }
      let y = dfs(x, Math.floor(n / 2));
      return n % 2 === 0 ? y * y : y * y * x;
  }

  const res = n % 2 === 0 ? dfs(20, n) : dfs(20, n) * 5;
  console.log('res', res);
  return res > Math.pow(10, 9) + 7 ? Math.pow(10, 9) + 7 : res;
};

console.log(countGoodNumbers(4))