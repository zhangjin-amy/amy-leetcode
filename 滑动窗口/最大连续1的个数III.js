// https://leetcode.cn/problems/max-consecutive-ones-iii/?envType=study-plan-v2&id=leetcode-75


var longestOnes = function(nums, k) {
  let l = 0,
      r = 0,
      zeros = 0, // 当前【l, r】区间0的个数
      max = 0;
  const length = nums.length;

  while(r < length) {
    if (nums[r] === 0) {
      zeros++;
      while(zeros > k) {
        if (nums[l] === 0) {
          zeros -= 1;
        }
        l = l + 1;
      }
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([1, 1, 1, 0, 0, 1, 0], 2))