var array = [4, 5, 6, 2, 10, 47, 48, 27];

var find = 10;

for (var i = 0; i < array.length; i++) {
  if (array[i] == find) {
    console.log("Data found at index " + (i + 1) + "th position");
    break;
  } else {
    console.log("Data not found ");
  }
}
