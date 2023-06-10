var search = function(nums, target) {


  function helper(left, right) {

      while(left <= right) {

          if (left === right) {
              return nums[left] === target ? left : -1;
          }

          const mid = left + Math.floor((right - left) / 2);

          if(nums[mid] === target) {
              return mid;
          }

          return getAns(helper(left, mid - 1), helper(mid + 1, right));

          

      }
  }


  function getAns(leftTarget, rightTarget) {
    if (leftTarget === -1 && rightTarget === -1) {
        return -1;
    }
    
    if (leftTarget !== -1) {
        return leftTarget;
    }
    
    if (rightTarget !== -1) {
        return rightTarget;
    }
}

  return helper(0, nums.length - 1);
};

console.log(search([4, 5, 6, 7, 0, 1, 2]))