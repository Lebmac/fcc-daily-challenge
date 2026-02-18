/* 
=== 2026 Winter Games Day 13: Nordic Combined ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-18

Given an array of jump scores for athletes, calculate their start 
delay times for the cross-country portion of the Nordic Combined.

The athlete with the highest jump score starts first (0 second delay).
All other athletes start later based on how far behind their jump 
score is compared to the best jump.

To calculate the delay for each athlete, subtract the athlete's jump 
score from the best overall jump score and multiply the result by 1.5. 
Round the delay up to the nearest integer. 
*/

function calculateStartDelays(jumpScores) {
  const max = Math.max(...jumpScores);

  return jumpScores.map((s) => {
    return Math.ceil(1.5 * (max - s));
  });
}
