// 可以用回溯法解决这个问题，但是会超出时间限制

// var fourSum = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   let result = [];

//   const dfs = function (path, sum, remain, target, count) {
//     if (path.length > count) {
//       return;
//     }

//     if (path.length === count && sum !== target) {
//       return;
//     }

//     if (path.length === count && sum === target) {
//       result.push([...path]);
//       return;
//     }

//     for (let i = 0; i < remain.length; i++) {
//       console.log("t", i, remain);
//       if (i >= 1 && remain[i] === remain[i - 1]) {
//         continue;
//       }
//       console.log("d", path, i);
//       path.push(remain[i]);
//       const _remain = [...remain];
//       dfs(path, sum + remain[i], _remain.slice(i + 1), target, count);
//       path.pop();
//     }
//   };

//   dfs([], 0, nums, target, 4);
//   return result;
// };

var fourSum = function(nums, traget) {
  nums.sort((a, b) => a - b);
  
  const length = nums.length;
  
  if (length < 4) {
    return [];
  }
  let result = [];
  for (let i = 0; i <= length - 4; i++) {
    if (i >= 1 && nums[i] === nums[i-1]) {
      continue;
    }
    // 重置
    const isUsed = Array.from({ length }, () => false);
    // console.log('i', i);
    // 三数之和的目标值
    const threeTarget = traget - nums[i];
    for (let j = i + 1; j <= length - 3; j++) {
      if (j >= 2 && nums[j] === nums[j-1] && isUsed[j-1]) {
        isUsed[j] = true;
        continue;
      }
      let left = j + 1,
          right = length - 1;
      
      while(left < right) {
        const curSum = nums[j] + nums[left] + nums[right];
        if (curSum === threeTarget) {
          isUsed[j] = true;
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // console.log('debug', i, j, left, right);
          // 剪枝
          const temp = nums[left];
          left++;
          while(left < right && nums[left] === temp) {
            left++;
          }
        }
        if (curSum < threeTarget) {
          left++;
        }
        if (curSum > threeTarget) {
          right--;
        }
      }
    }

  }

  return result;
}

// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
// console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log(fourSum([0,0,4,-2,-3,-2,-2,-3], 0));
