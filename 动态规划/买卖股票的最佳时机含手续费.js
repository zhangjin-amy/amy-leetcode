var maxProfit = function(prices, fee) {
  const length = prices.length;
  const dp = Array.from({ length }, () => {
    return Array.from( { length: 2 }, () => 0);
  });

  // dp[i][0]第i天没有股票
  // dp[i][1]第i天有股票
  dp[0][0] = 0;
  dp[0][1] = -prices[0]; 

  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
  }

  return dp[length-1][0];
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));