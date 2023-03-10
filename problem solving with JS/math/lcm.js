// Function to return
// gcd of a and b
function __gcd(a, b) {
  if (a == 0) return b;
  return __gcd(b % a, a);
}

//recursive implementation
function LcmOfArray(arr, idx) {
  // lcm(a,b) = (a*b/gcd(a,b))
  if (idx == arr.length - 1) {
    return arr[idx];
  }
  let a = arr[idx];
  let b = LcmOfArray(arr, idx + 1);
  return (a * b) / __gcd(a, b); // __gcd(a,b) is inbuilt library function
}

let arr = [1, 2, 8, 3];
document.write(LcmOfArray(arr, 0));
// arr = [2, 7, 3, 9, 4];
// document.write(LcmOfArray(arr, 0));
