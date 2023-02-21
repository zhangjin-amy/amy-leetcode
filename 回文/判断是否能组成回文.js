// https://leetcode.cn/problems/palindrome-permutation-lcci/

/**
 * 组成回文的关键，只能有一个字母出现的个数为奇数，其余字母的个数必须为偶数
 * 计数可以用map
 */

var canPermutePalindrome = function(s) {
    const length = s.length;
    if (length <= 1) {
        return true;
    }
    if (length === 2) {
        return s[0] === s[1];
    }
    let strMap = new Map();
    for (let i = 0; i < length; i++) {
        const curS = s[i];
        if (!strMap.has(curS)) {
            strMap.set(curS, 1);
        } else {
            strMap.delete(curS);
        }
    }

    return strMap.size <= 1;
};

console.log(canPermutePalindrome('tactcoa'))