/* 
=== Flattened ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-01

Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
 */

function isFlat(arr) {
  return arr.reduce((flat, el) => {
    return flat && !Array.isArray(el);
  }, true);
}
