// https://leetcode.cn/problems/longest-substring-without-repeating-characters/?favorite=2cktkvj

/**
 * 思路：
 * 1. 判断有无重复字符，最方便的就是set.has
 * @param {*} s 
 */

var lengthOfLongestSubstring = function(s) {
    // 临界条件
    const length = s.length;
    if (length <= 1) {
        return length;
    }
    if (length === 2) {
        return s[0] === s[1] ? 1 : 2;
    }
    let max = 1
        strMap = new Map()
        i = 0
        j = 0;
    for (j; j < length; j++) {
        const curS = s[j];
        // if (!strMap.has(curS)) {
        //     strMap.set(curS, j);
        //     max = Math.max(j - i + 1, max);
        // } else {
        //     // 🟢🟢这里i的取值要做判断，因为下一个重复值strMap.get(curS) + 1 可能比当前i小
        //     i = Math.max(strMap.get(curS) + 1, i);
        //     strMap.set(curS, j);
        //     max = Math.max(j - i + 1, max);
        // }

        // 优化
        if (strMap.has(curS)) {
            i = Math.max(strMap.get(curS) + 1, i);
        }
        strMap.set(curS, j);
        max = Math.max(j - i + 1, max);
    }
    return max;
}

console.log(lengthOfLongestSubstring('abba'))