/*
=== 2026 Winter Games Day 10: Alpine Skiing ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-15

Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:

Calculate the steepness of the hill by taking the drop divided by the distance.
Then, calculate the adjusted steepness based on the hill type:
"Downhill" multiply steepness by 1.2
"Slalom": multiply steepness by 0.9
"Giant Slalom": multiply steepness by 1.0
Return:

"Green" if the adjusted steepness is less than or equal to 0.1
"Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
"Black" if the adjusted steepness is greater than 0.25 
*/

function getHillRating(drop, distance, type) {
  const types = {
    Downhill: 1.2,
    Slalom: 0.9,
    GiantSlalom: 1,
  };
  const _type = type.replace(" ", "");
  const slope = drop / distance * types[_type];

  return slope <= 0.10 ?
          "Green" :
         slope <= 0.25 ?
          "Blue" :
          "Black";
}
