/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
      return 1;
  }
  if (n === 1) {
      return x;
  }

  const dfs = function(x, n) {
      if (n === 1) {
          return x;
      } 
      let y = dfs(x, parseInt( n / 2));
      return n % 2 === 0 ? y * y : y * y * x;

  };
  const res = dfs(x, n);
  return n > 0 ? res : 1 / res;


};


var myPow = function(x, n) {
  let m = n;
  return m >= 0 ? quickMul(x, m) : 1 / quickMul(x, -m);
};

var quickMul = function (x, m) {
  if (m === 0) {
      return 1;
  }
  let res = quickMul(x, Math.floor(m / 2));
  return m % 2 === 0 ? res * res : res * res * x;
}