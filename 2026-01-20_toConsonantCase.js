
/* 
=== Consonant Case ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-20

=== Input ===
Given a string representing a variable name, 

=== Function / Output ===
convert it to consonant case using the following rules:
- All consonants should be converted to uppercase.
- All vowels (a, e, i, o, u in any case) should be converted to lowercase.
- All hyphens (-) should be converted to underscores (_). */

function toConsonantCase(str) {
  let s = str.toUpperCase();
  
  const oldChars = "AEIOU-";
  const newChars = "aeiou_";
  const chars = new RegExp(`[${oldChars}]`,"g");

  return s.replace(chars, char => {
    let i = oldChars.indexOf(char);
    return newChars[i];
  });
}
