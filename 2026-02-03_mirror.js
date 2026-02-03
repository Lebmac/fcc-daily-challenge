/* 
=== String Mirror ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-03

Given a string, return a new string that consists of the given string 
with a reversed copy of itself appended to the end of it. */

function mirror(str) {
  const mirror = str.split("")
                    .reverse()
                    .join("");

  return str + mirror;
}
