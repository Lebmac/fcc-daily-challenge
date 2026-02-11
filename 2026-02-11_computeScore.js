/* 
=== 2026 Winter Games Day 6: Figure Skating ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-11

Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.
*/

function computeScore(judgeScores, ...penalties) {
  const max = Math.max(...judgeScores);
  const min = Math.min(...judgeScores);

  const sum = judgeScores.reduce((total, score) => {
    return total += score;
  });

  const pen = penalties.reduce((total, penalty) => {
    return total += penalty;
  }, 0);

  return sum - max - min - pen;
}
