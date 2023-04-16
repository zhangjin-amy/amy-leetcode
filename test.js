var jump = function(nums) {
  let farthest = nums[0];
  const length = nums.length;
  let count = nums.length === 1 ? 0 : 1;
  let start = 0;
  while(start < length) {
      if (farthest >= length - 1) {
        return count;
      }
      let range = start + nums[start];
      for (let second = start; second <= range; second++) {
        // console.log(second, second + nums[second]);
          if (nums[second] === 0) {
              continue;
          }
          if (second + nums[second] > farthest) {
              start = second;
              farthest = second + nums[second];
          }
      }
      count += 1;
  }
  return count;
};

console.log(jump([2, 3, 1, 1, 4]));