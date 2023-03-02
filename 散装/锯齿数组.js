// https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/description/


// 暴力解法
var movesToMakeZigzag = function(nums) {
  const length = nums.length;
  if (length === 1) {
      return 0;
  }
  if (length === 2) {
      return nums[0] - nums[1] === 0 ? 1 : 0;
  }

  // 偶数大
  let diff1 = 0;
  let diff2 = 0;
  for (let i = 1; i < length; i = i+2) {
      const left = nums[i - 1];
      const right = i + 1 < length ? nums[i+1] : undefined;
      const curTo = right === undefined ? left - 1 : Math.min(left, right) - 1;
      if (nums[i] > curTo) {
        // console.log(i, left, right, curTo, nums[i] - curTo)
        diff1 += nums[i] - curTo;
      }

      
  }

  // 偶数小
  for (let i = 0; i < length; i = i + 2) {
    const left = i - 1 > 0 ? nums[i - 1] : undefined;
    const right = i + 1 < length ? nums[i + 1] : undefined;
    let curTo;
    if (left === undefined) {
      curTo = right -1;
    }
    if (right === undefined) {
      curTo = left - 1;
    }
    if (left !== undefined && right !== undefined) {
      curTo = Math.min(left, right) - 1;
    }
    if (nums[i] > curTo) {
      diff2 += nums[i] - curTo;
    }
  }
  return Math.min(diff1, diff2)

}

console.log(movesToMakeZigzag([7,4,8,9,7,7,5]))


// [7,4,8,9,7,7,5]