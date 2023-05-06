function deepClone(source) {
  if (typeof source !== 'object' || source === null) {
    return source;
  }
  const target = Array.isArray(source) ? [] : {};
  for(let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] !== 'object' || source[key] === null) {
        target[key] = source[key];
      } else {
        target[key] = deepClone(source[key]);
      }
    } 
  }
  return target;
}

const obj1 = {
  name: 'obj1',
  books: ['book1', 'book2'],
}

const obj2 = deepClone(obj1);
console.log(obj2);

obj2.books.push('book3');
console.log(obj1, obj2);