/* 
=== 2026 Winter Games Day 7: Speed Skating ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-12

Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on. 
*/

function largestDifference(skater1, skater2) {
  let max = -Infinity;
  let lap = 0;

  for (let i = 0; i < skater1.length; i++) {
    let gap = Math.abs(skater1[i] - skater2[i]);
    
    if (gap > max) {
      max = gap;
      index = i;
    }
  }

  return index + 1;
}
