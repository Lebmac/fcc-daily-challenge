/* 
=== Valid Pawn Moves ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-30

=== Read about this function on my blog ===
https://lebmac.github.io/react-hello-ghpages/#/challenge/en-passant-and-why-systems-feel-unintuitive
*/

function findPawnMoves(position) {
  let [c, rStr] = position.split("");
  let r = Number(rStr);
  
  return [       `${c}${r+1}`,
    (r === 2) && `${c}${r+2}`
  ].filter(Boolean);
}

