/*
=== Letter and Number Count ===
===.Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-26
Given a string, return a message with the count of how many letters 
and numbers it contains.

Letters are A-Z and a-z.
Numbers are 0-9.
Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the 
count of letters and "Y" is the count of numbers. If either count
is 1, use the singular form for that item. E.g: "1 letter" instead 
of "1 letters" and "1 number" instead of "1 numbers".
*/

function countLettersAndNumbers(str) {
  const x = str.match(/[A-Za-z]/g)?.length || 0;
  const y = str.match(/[0-9]/g)?.length || 0;
  const letters = x === 1 ? "letter" : "letters";
  const numbers = y === 1 ? "number" : "numbers"
  
  return `The string has ${x} ${letters} and ${y} ${numbers}.`;
}
