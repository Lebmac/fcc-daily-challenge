/* 
=== Pocket Change ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-05

Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents. */

function countChange(change) {
  const sum = change.reduce((total,coin) => {
    return total += coin / 100;
  }, 0);
  return `$${sum.toFixed(2)}`;
}
