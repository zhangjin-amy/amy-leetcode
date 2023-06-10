
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const queue = [], res = [], len = nums.length
  for (let i = 0; i < len; i++) {
      while (queue.length && nums[queue.at(-1)] <= nums[i]) {
          queue.pop()
      }
      queue.push(i)
      if (queue.length && queue[0] === i - k) {
          queue.shift()
      }

      // 🟢妙啊
      if (i >= k - 1) {
          res.push(nums[queue[0]])
      }
  }
  return res
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
