var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.push(10);
console.log(arr);

arr.unshift(9);
console.log(arr);

arr.splice(3, 0, 9, 10);
console.log(arr);

arr.pop();
// console.log(arr);
arr.shift();
console.log(arr);

arr.splice(2, 1, 44);
console.log(arr);
