/* 
=== Add Punctuation ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-28

Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string. 
*/

function addPunctuation(sentences) {
  return sentences.replace(/ (?=[A-Z])/g, '. ') + ".";
}
