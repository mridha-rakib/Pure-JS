//{ Driver Code Starts
//Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_line = readLine().split(" ");
    let s = input_line[0];
    let obj = new Solution();
    if (obj.isIsogram(s)) console.log("1");
    else console.log("0");
  }
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
  //Function to check if a string is Isogram or not.
  isIsogram(s) {
    // code here
    let hash = new Array(256);
    hash.fill(0);

    for (let i = 0; i < s.length; i++) {
      hash[s.charCodeAt(i)]++;
      if (hash[s.charCodeAt(i)] > 1) {
        return false;
      }
    }
    return true;
  }
}
