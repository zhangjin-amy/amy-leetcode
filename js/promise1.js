setTimeout(() => console.log(0));
new Promise((resolve) => {
  resolve(2);
}).then((o) => console.log(o));

new Promise((resolve) => {
  resolve(5);
})
.then((o) => console.log(o))
.then(() => console.log(6))
.then(() => setTimeout(()=>{console.log(4)}))
.then(() => console.log(6))
.then(() => console.log(6))
// 2=>5=>6=>6=>6=>0=>4
