// https://leetcode.cn/problems/max-consecutive-ones/

/**
 * 
 */

var findMaxConsecutiveOnes = function(nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0] === 1 ? 1 : 0;
    }
    let i = 0,
        j = 0;
    let max = 0;
    for (j; j < length; j++) {
        if (nums[j] === 1) {
            // 重置i的位置
            if (nums[i] === 0) {
                i = j;
            }
            max = Math.max(max, j - i + 1);
        } else {
            i = j
        }
    }
    return max;
};

// var findMaxConsecutiveOnes = function(nums) {
//     const length = nums.length;
//     if (length === 1) {
//         return nums[0] === 1 ? 1 : 0;
//     }
//     const numsStr = nums.join('');
//     const numsArr = numsStr.split('0');
//     let max = 0;
//     for (let i = 0; i < numsArr.length; i++) {
//         max = Math.max(max, numsArr[i].length);
//     }
//     return max;
// }
console.log(findMaxConsecutiveOnes([1,1, 0, 1, 1, 1]))