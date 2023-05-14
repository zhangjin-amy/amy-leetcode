const swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const shiftDown = function(arr, i, length) {
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    // j为左节点，j+1为右节点
    if (j + 1 < length && arr[j + 1] > arr[j]) {
      j += 1;
    }

    if (arr[j] > arr[i]) {
      swap(arr, i, j);
      i = j;
    }

  }
}

const headSort = function(arr) {
  const length = arr.length;
  // 找到第一个非叶子节点
  const first = Math.floor(length / 2 - 1);

  for (let i = first; i >= 0; i--) {
    shiftDown(arr, i, length);
  }

  //  交换堆顶和最后一个叶子节点的值
  for (let i = length - 1; i >= 0; i--) {
    swap(arr, 0, i); // 这一步怎么搞
    shiftDown(arr, 0, i);
  }

  return arr;
}

console.log(headSort([7, 1, 8, 2, 3]))