/* 
=== Nth Fibonacci Number ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-02

=== Input / Output ===
Given an integer n, return the nth number in the fibonacci sequence.

=== Function Description ===
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. 
The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. */

function nthFibonacci(n) {
  var fib = [0, 1];
  
  if (n < 1) return 0;
  
  while (fib.length < n) {
    fib = [...fib, fib.at(-2) + fib.at(-1)];
  }
  
  return fib.at(-1);
}

/* 
=== Solution rationale === 
The solution produces an array of all Fibonacci numbers from 0-n and returns element n.
It should be optimised with an iterator, and should maintain memory of only the largest 3 
Fibonacci numbers if very large numbers are to be produced.
I programmed this way because the code looked beautiful, but as stated it's not the method
with the highest performance.

=== For calculating very large Fibonacci numbers replace while loop with the following === 
for (var i = 2; i < n; i++) {
  fib = [fib.at(-1), fib.at(-2) + fib.at(-1)];  
}
*/
