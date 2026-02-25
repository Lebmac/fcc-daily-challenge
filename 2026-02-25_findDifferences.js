/* 
=== Sequential Difference ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-25

Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0]. 
*/

function findDifferences(arr) {
  let difference = [];

  for (let n = 1; n < arr.length; n++)
    difference.push(arr[n] - arr[n-1]);
  
  difference.push(0);

  return difference;
}
