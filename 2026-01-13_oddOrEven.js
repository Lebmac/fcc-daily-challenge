/*
=== Odd or Even? ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-13

=== Function / Input / Output ===
Given a positive integer, return "Odd" if it's an odd number, and "Even" is it's even.
*/

function oddOrEven(n) {
  let result = ["Even", "Odd"]; 
  return result[n % 2];
}
