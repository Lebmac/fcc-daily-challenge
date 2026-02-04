/* 
=== Truncate the Text ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-04

Given a string, return it as-is if it's 20 characters or shorter. 
If it's longer than 20 characters, truncate it to the first 17 characters 
and append "..." to the end of it (so it's 20 characters total) and return the result. */

function truncateText(text) {
  if (text.length > 20)
    return text.substr(0, 17) + "...";
  return text;
}
