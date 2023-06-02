// 请写一个函数 batchPromises(promises, batchSize)，
// 返回一个 Promise 对象，该对象会按照指定的批次大小并发执行指定的 Promise 对象数组，
// 并且会等待所有 Promise 对象都完成后返回结果。

const p1 = new Promise((resolve, reject) => {
  resolve('p1')
})
const p2 = new Promise((resolve, reject) => {
  resolve('p2')
})

const p3 = new Promise((resolve, reject) => {
  resolve('p3')
})

const p4 = new Promise((resolve, reject) => {
  resolve('p4')
})

const p5 = new Promise((resolve, reject) => {
  resolve('p5')
})

const p6 = new Promise((resolve, reject) => {
  resolve('p6')
})

const p7 = new Promise((resolve, reject) => {
  resolve('p7')
})

const promises = [p1, p2, p3, p4, p5, p6, p7];



function batchPromises(promises, batchSize) {
  const total = promises.length;
  const batches = [];
  for (let i = 0; i < total; i += batchSize) {
    batches.push(promises.slice(i, i + batchSize));
  }
  const results = [];

  return batches.reduce((prev, batch) => {
    return prev.then(() => {
      Promise.all(batch.map(p => p.then(result => results.push(result))));
    });
  }, Promise.resolve())
    .then(() => results);
}

// console.log(batchPromises(promises, 3))

// batchPromises(promises, 3).then(res => {
//   console.log(res)
// })