//请写一个函数 raceWithTimeout(promises, timeout)，
// 返回一个 Promise 对象，该对象会等待指定的 Promise 对象数组中的任意一 Promise 对象变为 
// resolved 或 rejected 状态，如果超过指定的时间仍未完成，则会返回一个 rejected 状态的 Promise 对象。

function raceWithTimeout(promises, timeout) {
 
  return new Promise((resolve, reject) => {
    let timeId = setTimeout(() => {
      reject();
    }, timeout);

    Promise.race(promises)
      .then(res => {
        clearTimeout(timeId)
        resolve(res)
      })
      .catch(err => {
        clearTimeout(timeId)
        reject(err)
      })
  });
}