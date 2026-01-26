/* 
=== FizzBuzz Mini ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-26

=== Input ===
Given an integer, 

=== Output ===
return a string based on the following rules:
If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string. */

function fizzBuzzMini(n) {
  let fizz = n % 3 === 0 ? "Fizz" : "";
  let buzz = n % 5 === 0 ? "Buzz" : "";

  return (fizz + buzz) || String(n);
}
