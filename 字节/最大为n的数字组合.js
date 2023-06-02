function atMostNGivenDigitSet(digits, n) {
  const str = n.toString();
  const len = str.length;
  const dp = Array.from({ length: len + 1 }, () => 0);
  dp[len] = 1;
  for (let i = len - 1; i >= 0; i--) {
    const num = parseInt(str[i]);
    for (const digit of digits) {
      if (digit < num) {
        dp[i] += Math.pow(digits.length, len - i - 1);
      } else if (digit === str[i]) {
        dp[i] += dp[i + 1];
      }
    }
  }

  console.log(dp);
  let ans = dp[0];
  for (let i = 1; i < len; i++) {
    ans += Math.pow(digits.length, i);
  }
  return ans;
}

console.log(atMostNGivenDigitSet(['1', '3'], 34));

function atMostNNonZeroes(digits, n) {
  const str = n.toString();
  const len = str.length;
  const dp = Array.from({ length: len + 1 }, () => Array.from({ length: len + 1 }, () => 0));
  dp[len][0] = 1;
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(str[i]);
    for (let j = 0; j <= len; j++) {
      for (let digit = 1; digit <= 9; digit++) {
        if (digit < sum) {
          dp[i][j] += Math.pow(10, len - i - 1);
        } else if (digit === sum) {
          dp[i][j] += dp[i + 1][j - digit];
        }
      }
    }
  }
  return dp[0][0] - 1;
}
