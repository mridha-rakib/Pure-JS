var arr = [4, 5, 6, 7, 8, 9, 10, 11];

// console.log(arr[arr.length - 1], arr[arr.length - 2]);

for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 2;
}
//console.log(arr);

// Array sum
var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
//console.log(sum);

// odd number print

for (var i = 0; i < arr.length; i++) {
  //if (arr[i] & 1); // console.log(arr[i]);
}

// even number print
for (var i = 0; i < arr.length; i++) {
  if ((arr[i] & 1) != 1) console.log(arr[i]);
}
