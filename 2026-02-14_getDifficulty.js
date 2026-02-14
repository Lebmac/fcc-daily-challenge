/* 
=== 2026 Winter Games Day 9: Skeleton ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-14
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:

"L" for a left turn
"R" for a right turn
"S" for a straight segment
Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

All other curves add 5 points each (all other "L" or "R" characters).

Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

"Easy" if the total is 0 - 100
"Medium" if the total is 101-200
"Hard" if the total is over 200 
*/

function getDifficulty(track) {
  const lr = track.match(/LR/g)?.length * 10 || 0;
  const rl = track.match(/RL/g)?.length * 10 || 0;
  const ns = track.match(/R|L/g)?.length * 5 || 0;
  
  const difficulty = lr + rl + ns;
  
  return difficulty <= 200 ?
    difficulty <= 100 ? 
    "Easy" : 
    "Medium" :
    "Hard" ;
}
