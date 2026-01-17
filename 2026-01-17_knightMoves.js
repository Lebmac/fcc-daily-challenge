/* 
=== Knight Moves ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-17

=== Input ===
Given the position of a knight on a chessboard, 

=== Output ===
return the number of valid squares the knight can move to.

=== Function and Description of Problem Space ===
A standard chessboard is 8x8, with columns labeled A through H 
(left to right) and rows labeled 1 through 8 (bottom to top).
It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

A knight moves in an "L" shape: two squares in one direction 
(horizontal or vertical), and one square in the perpendicular 
direction.

This means a knight can move to up to eight possible positions, 
but fewer when near the edges of the board. For example, if a knight 
was at A1, it could only move to B3 or C2. 
*/

function knightMoves(position) {
  let [x, y] = position.split("");
  let weights = [1,2,3,3,3,3,2,1];
  
  x = weights[x.charCodeAt(0) - 65];
  y = weights[y - 1];

  return x * y + 2 - Math.min(x, y);
}

/* 
=== Design Rationale === 

=== Part 1: Rationalise the input ===
Firstly, I realised it was important to separate the input into
a logical format, such that I could index a 2D array, or provide
the position as two inputs to a mathematical expression. This
required spltting the position into chars, then converting the
letter component to an integer.

Development of the expression which described the relationship
a knight has with the board required additional thought.

=== Part 2: Use X and Y to describe the knight N(X,Y) ===
My first approach was to consider the knight has 8 moves, and 
from that starting point deduct some factor from 8 for each loss
of freedom the knight experienced as it got closer to the edge.
This yielded some promising results, but I could not connect
this concept to a solve.

I next attempted to describe the knights position by the number
of columns/rows between itself and the edge of the board. Beyond 2
columns/rows it was unnecessary to consider more. I realised the
board symmetry meant I could consider just a 4x4 grid, and then 
realised that columns/rows 3 & 4 were identical when considering
the number of moves available to the knight, I could consider
a 3x3 grid:

Table N(X,Y) describing number of moves available to a knight.
	|| 1 | 2 | 3 | 4 |  < X
    * ================
1	|| 2 | 3 | 4 | 4 |
2	|| 3 | 4 | 6 | 6 |
3	|| 4 | 6 | 8 | 8 |
4	|| 4 | 6 | 8 | 8 |  < Identical to row above
^                ^ Identical to left-side column
Y

In actual fact only above the diagonal was necessary to consider
because the grid is symmetrical.

At this point I came to realise that when multiplying X*Y, some
offset value existed between the XY product, and the number of available
moves. Consider N(X,Y) = X*Y + F(X,Y), where F() is derived from the
lookup table below, and represents the difference between XY and the
corresponding output from the table above.

F(X,Y) =
	|| 1 | 2 |  3 |  < X
    * =============
1	|| 1 | 1 |  1 |
2	||   | 0 |  0 |
3	||   |   | -1 |
^  
Y

As the input indices increased, somehow F(X,Y) tended to decrease.
I noted that when Y increased by 1, F(3,Y) decreased by 1 The same
was not true when X increased by 1 for Y=1 F(X,1)=1. This pointed to
a direct and linear relationship with the smallest of X, Y.
Lets trial... F'(X,Y) = X*Y - min(X,Y):

F'(X,Y) =
	|| 1 | 2 | 3 |  < X
    * ============
1	|| 0 | 1 | 2 |
2	||   | 2 | 4 |
3	||   |   | 6 |
^  
Y

Comparison to table N(X,Y) reveals an exact offset of 2 for
all indices. Therefore N(X,Y) = X*Y - min(X,Y) + 2.

=== Part 3: Map 3x3 grid to 8x8 symmetry ===
For this problem I would need to map inputs X and Y, which both
have type Int, range 1-8, to values for N(X,Y) which expects
inputs of type Int, range 1-3. 

X, Y are easily re-ranged to 0-7. The map would use X and Y as
indices to retrieve values 1,2,3 from an array, lets call the
map response X' and Y' respectively.

Expression N(X',Y') is returned, producing an arithmetically 
derived move count for a knight, given it's position on the
chessboard. Cool solve!
*/
