// https://leetcode.cn/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    const length = s.length;
    if (length === 1) {
        return s;
    }

    if (length === 2) {
        return s[0] === s[1] ? s : s[0];
    }
    let res = s[0];

    let dp = Array.from({length}, () => {
        return Array.from({length}, () => false)
    })

    for (let i = 0; i < length; i++) {
        dp[i][i] = true;
    }

    // console.log(dp)

    //  ❌❌❌这样的话，计算dp[0][3]时，其实dp[1][2]还未知
    // for (let i = 0; i < length; i++) {
    //     for (let j = 1; j < length; j++) {
    //         // console.log(i, j);
    //         if (s[i] === s[j]) {
    //             dp[i, j] = i - 1 >= 0 && j - 1 >= 0 ? dp[i+1, j-1] : true;
    //             if (dp[i, j]) {
    //                 if (j - i + 1 > res.length) {
    //                   res = s.slice(i, j +1);
    //                 }
    //             }
    //         }
    //     }
    // }

    // 🟢🟢 假设回文的个数是2，依次假设为3， 4， 知道最大的长度
    for (let n = 2; n <= length; n++) {
        for (let i = 0; i < length; i++) {
            const j = n - 1 + i;
            if (j > length - 1) {
                break;
            }
            if (j - i === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
            }
            if (dp[i][j]) {
                res = j - i + 1 > res.length ? s.slice(i, j + 1) : res;
            }           
        }
    }
    return res;
};

console.log(longestPalindrome('aacabdkacaa'));
// console.log(longestPalindrome('aaca'));