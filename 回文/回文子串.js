// https://leetcode.cn/problems/palindromic-substrings/

/**
 * 由于每位的字符视为不相等，所以至少有length个长度为1的回文子串；
 * 依次判断长度为2， 3， 4， 5， 6的回文子串
 * 判断是否为回文子串可以用动态规划的方法，即若dp[i][j]为回文的判断依据是dp[i+1][j-1]为回文串，且s[i] === s[j]
 */

var countSubstrings = function(s) {
    const length = s.length;
    if (length === 1) {
        return 1;
    } 
    if (length === 2) {
        return s[0] === s[1] ? 3 : 2;
    }
    let count = length;
    let dp = Array.from({ length }, () => {
        return Array.from({ length }, () => false);
    });
    for (let i = 0; i < length; i++) {
        dp[i][i] = true;
    }
    for (let n = 2; n <= length; n++) {
        for (let i = 0; i < length; i++) {
            const j = n + i -1;
            if (j >= length) {
                break;
            }
            if (j - i === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
            }
            if (dp[i][j]) {
                count += 1;
            }
        }
    }
    return count;
};