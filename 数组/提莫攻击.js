// https://leetcode.cn/problems/teemo-attacking/
var findPoisonedDuration = function(timeSeries, duration) {
    const length = timeSeries.length;
    // 遍历timeSeries, timeSeries[i]有两种状态，未中毒和中毒中
    // 未中毒，直接+duration
    // 已中毒。上次中毒的结束时间 expires, 本次中毒的结束时间 timeSeries[i] + duration -1 
        // 本次中毒累加的持续时间timeSeries[i] + duration - 1  - expires
    let prevExpires = -1,
        sum = 0;
    for (let i = 0; i < length; i++) {
        const curTime = timeSeries[i];
        const curExpires = curTime + duration - 1;
        if (prevExpires < curTime) {
            sum += duration;
        }
        if (prevExpires >= curTime) {
            sum += curExpires - prevExpires;
        }
        prevExpires = curExpires;
    }
    return sum;
    
};

console.log(findPoisonedDuration([0, 1, 2, 3], 1))
