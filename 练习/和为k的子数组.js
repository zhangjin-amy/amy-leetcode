var subarraySum = function(nums, k) {
  const length = nums.length;

  let ans = 0;
  let sums = [];
  for (let i = 0; i < length; i++) {
    sums[i] = i === 0 ? nums[i] : sums[i-1] + nums[i];
    // 1. nums[i] 本身===k
    // 2. nums[i] 本身 === k && sums[i] === k
    // 3. nums[i] !== k 但是sums[i] === k

    if (i === 0 && nums[i] === k) {
      console.log('--ha')
      ans += 1;
    } else {
      console.log('--yi???', i, nums[i])
      if (nums[i] === k) {
        ans += 1;
      }
  
      if (sums[i] === k) {
        ans += 1;
      } 
    }
  }

  // console.log(sums)

  for (let i = 1; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const sum = sums[j] - sums[i - 1];
      if (sum === k) {
        ans += 1;
      }
    }
  }

  return ans;

};

console.log(subarraySum([1], 1))


// 求和为k的子数组
// var sumK = function(nums, k) {
//   const length = nums.length;

//   for (let i = 0; i < length; i++) {

//   }
// }