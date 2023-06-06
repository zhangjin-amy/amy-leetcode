var singleNonDuplicate = function(nums) {

  let low = 0,
      height = nums.length - 1;
  
  while(height >= low) {
      const mid = low + Math.floor(height - low);
      if (nums[mid] === nums[mid ^ 1]) {
          low = mid + 1;
      } else {
          height = mid - 1;
      }
  }
  
  return nums[low];

};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))