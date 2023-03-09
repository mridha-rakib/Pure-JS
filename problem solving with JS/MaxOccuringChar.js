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
    let ans = obj.getMaxOccuringChar(s);
    console.log(ans);
  }
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
 */
class Solution {
  //Function to find the maximum occurring character in a string.
  getMaxOccuringChar(str) {
    // code here

    let hash = new Array(256);
    hash.fill(0);

    for (let i = 0; i < str.length; i++) {
      hash[str.charCodeAt(i) - 97]++;
    }

    let max_index = 0;

    for (let i = 1; i < 26; i++) {
      if (hash[i] > hash[max_index]) {
        max_index = i;
      }
    }

    return String.fromCharCode(max_index + 97);
  }
}
