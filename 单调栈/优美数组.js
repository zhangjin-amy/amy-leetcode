var numberOfSubarrays = function(nums, k) {
  const odd = [-1];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1) {
          odd.push(i);
      }
  }
  odd.push(nums.length)
  let ans = 0;

  console.log('odd', odd);
  for (let i = 1; i + k < odd.length; i++) {
      console.log(i, odd[i], odd[i-1], odd[i + k],odd[i + k - 1]);
      ans += (odd[i] - odd[i-1]) * (odd[i + k] - odd[i + k - 1]);
  }
  return ans;
};