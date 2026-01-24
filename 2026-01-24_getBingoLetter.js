/* 
=== Bingo! Letter ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-24

=== Input / Output ===
Given a number, return the bingo letter associated with it (capitalized). 

=== Function ===
Bingo numbers are grouped as follows:
Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75 */

function getBingoLetter(n) {
  const bingo = ["B","I","N","G","O"];
  const letter = Math.floor((n - 1) / 15);
  
  return bingo[letter];
}
