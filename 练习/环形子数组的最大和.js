var maxSubarraySumCircular = function(nums) {
  // 这和最大连续子数组有啥区别，哈哈哈哈
  const length = nums.length;
  if (length === 1) {
      return nums[0];
  }
  
  let preMax = 0,
      max = nums[0],
      preMin = 0,
      min = nums[0],
      sum = 0;
  
  for (num of nums) {
      sum += num;
      preMax = Math.max(preMax + num, num);
      max = Math.max(max, preMax);
  }

  for (num of nums) {
      preMin = Math.min(num, preMin + num);
      min = Math.min(min, preMin);
  }

  // console.log('--debug', max, sum, min)
  return Math.max(max, min < sum ? sum - min : Number.MIN_SAFE_INTEGER);
};

console.log(maxSubarraySumCircular([-3, -2, -3]))