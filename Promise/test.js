const p = new Promise((resolve, reject) => {
  resolve(1);
  return p;
})

p.then(res => {
  console.log(res);
}).then(res => {
  console.log(res);
})

// p.then(res => {
//   console.log(res);
// })

// p.then(res => {
//   console.log(res);
// })