const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return 1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return 2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return 3
})

// Promise.all([ajax1(), ajax2(), ajax3()]).then(data => {
//   console.log('done', data);
// })

Promise.myAll = function(arr) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]()).then(res => {
        // 要改正奥，因为是返回的顺序
        data[i] = res;
        count++;
        if (count === arr.length) {
          resolve(data);
        }
      }, (err) => {
        reject(err);
      })
    }
  })
}

// Promise.myAll([ajax1, ajax2, ajax3]).then(data => {
//   console.log('done', data);
// });

// Promise.myAll2 = function(arr) {
//   return new Promise((resolve, reject) => {
//     let i = 0;
//     let data = [];
//     while(i < arr.length) {
//       Promise.resolve(arr[i]()).then(res => {
//         data[i] = res;
//         i++;
//         if (i === arr.length) {
//           resolve(data);
//         }
//       }, (err) => {
//         reject(err);
//       })
//     }
//   })
// }

// Promise.myAll2([ajax1, ajax2, ajax3]).then(data => {
//   console.log('done2', data);
// });

// const ajaxArr = [ajax1, ajax2, ajax3];

async function myAll() {
  const res1 = await ajax1();
  const res2 = await ajax2();
  const res3 = await ajax3();

  console.log([res1, res2, res3]);
}

let data = [];
Promise.resolve(ajax1()).then(res => {
  data.push(res);

  // 执行下一个ajax函数
  return Promise.resolve(ajax2());
}).then(res => {
  data.push(res);

  return Promise.resolve(ajax3());
}).then(res => {
  data.push(res);

  return data;
}).then(res => {
  console.log('done', data);
})