/* 
=== Integer Hypotenuse ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-16

=== Input ===
Given two positive integers representing the lengths for the two legs
(the two short sides) of a right triangle, 

=== Output ===
determine whether the hypotenuse is an integer.
Note: return boolean.

The length of the hypotenuse is calculated by adding the squares of the
two leg lengths together and then taking the square root of that total (a2 + b2 = c2). 
*/

function isIntegerHypotenuse(a, b) {
  let h = Math.sqrt(a**2 + b**2);

  return Math.round(h) === h ? true : false;
}
