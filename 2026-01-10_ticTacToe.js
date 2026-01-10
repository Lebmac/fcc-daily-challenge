/* 
=== Tic-Tac-Toe ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-10

== Input ===
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.
Each element in the given matrix is either an "X" or "O".

=== Function ===
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

=== Output ===
Return:
"X wins" if player X has three in a row.
"O wins" if player O has three in a row.
"Draw" if no player has three in a row. */

function ticTacToe(board) {
  const player = { O: 0, X: 1 };
  const matrix = [
      7, //000000111
     56, //000111000,
     73, //001001001,
     84, //001010100,
    146, //010010010,
    273, //100010001,
    292, //100100100,
    448  //111000000
  ]
  
  let game = parseInt(board.flat(1)
              .map(move => {return player[move]})
              .join(""),2);

  return matrix.reduce((result, v) => {
    if ((v & game) == v) return "X wins";
    if ((v & game) == 0) return "O wins";
    return result
  }, "Draw");
}

/* 
=== Design rationale === 
I couldn't think of any really cool way to do this.
I decided to pursue this bit-hacking approach, hoping that
that I would discover a clean output which inferred a win, draw, 
or lose state.

My original plan was to interpret
- the input game as a 1x9 vector
- a win matrix as an 8x9 matrix (there are 8 ways to win tic tac toe)
- calculate the dot product 1x8 matrix
- return the result from on array.includes(n)

The bitwise method above was easier to code.
The most sensible solution could actually have been 8 if statements.
*/
