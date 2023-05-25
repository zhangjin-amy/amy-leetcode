var singleNonDuplicate = function(nums) {
  // 二分查找吧
  const length = nums.length;

  const mid = Math.floor(length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);

  

  if (left.length && right.length) {
    if (nums[mid] !== left.at(-1) && nums[mid] !== right[0]) {
      return nums[mid];
    }
  }

  if (left.length && !right.length) {
    
  }
};