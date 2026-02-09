/* 
=== 2026 Winter Games Day 4: Ski Jumping ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-09

Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

Your score is calculated by summing the above four values.
The current total scores of the other jumpers are:

165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal" */

function skiJumpMedal(...args) {
  const medal = [
    "Gold",
    "Silver",
    "Bronze",
  ];
  const score = args.reduce((tot,cur) => {
    return tot += cur;
  });

  for (let i = 0; i < 3; i++) {
    if (score > scores[i]) return medal[i];
  }

  return "No Medal";
}

const scores = [
  180.0,
  175.0,
  172.0,
  170.0,
  169.5,
  165.5,
  162.0,
  158.0,
];
