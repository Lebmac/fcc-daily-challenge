/* 
=== Par for the Hole ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-11

=== Input / Function ===
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

=== Output / Function ===
Return:
"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par. */

function golfScore(par, strokes) {
  const score = clamp(-2, strokes - par, 2);
  const idiom = [
    "Par",
    "Bogey",
    "Double bogey",
    "Eagle",
    "Birdie"
  ]
  return strokes > 1 ? idiom.at(score) : "Hole in one!";
}

function clamp(min, num, max) {
  return min >= num ? min : max <= num ? max : num;
}

/* 
=== Design rationale === 
This function presents a case where two possible responses
can be considered for inputs where strokes=1, for the
following examples "Hole in one!" ahould be returned, but:
- Par 3 Strokes 1: also presents as Eagle
- Par 2 Strokes 1: also presents as Birdie
- Par 1 Strokes 1: also presents as Par
Therefore:
- Selecting the correct idiom is typically mathematical.
  The function must measure the difference between par 
  and strokes, then map the result to an idiom. 
- But, an overriding statement must exist to select
  "Hole in one!" instead of Eagle, Birdie, or Par, per the 
  above examples.
*/
