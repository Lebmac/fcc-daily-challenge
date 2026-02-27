/* 
=== Matrix Shift ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-27

Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

A positive shift moves values to the right.
A negative shift moves values to the left.
Values should wrap:

Treat the matrix as one continuous sequence of values.
When a value moves past the end of a row, it continues at the beginning of the next row.
When a value moves past the last position in the matrix, it wraps to the first position.
The same applies in reverse when shifting left.
For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
with a shift of 1, move all the numbers to the right one:

[
  [6, 1, 2],
  [3, 4, 5]
] */

function shiftMatrix(matrix, shift) {
  let _matrix = matrix.flat(Infinity);
  let size = matrix.map(arr => arr.length);
  let _shift = [], output = [];

  for (let i = 0; i < _matrix.length; i++) {
    _shift.push(_matrix.at((i - shift) % _matrix.length));
  }

  for (let i = 0; i < size.length; i++) {
    output.push(_shift.slice(0, size[i]));
    _shift = _shift.slice(size[i]);
  }

  return output;
}
