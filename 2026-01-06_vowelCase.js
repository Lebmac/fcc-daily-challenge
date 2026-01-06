/* 
=== vOwElcAsE ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-06

=== Input / Output ===
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

=== Function ===
Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.
 */

function vowelCase(str) {
  let vowel = /[aeiouAEIOU]/;
  let vowelCase = "";

  for (let letter of str) {
    if (vowel.test(letter)) {
      vowelCase += letter.toUpperCase();
    } else {
      vowelCase += letter.toLowerCase();
    }
  }
  
  return vowelCase;
}

/* 
=== Design Rationale === 
1.  The function will need to test whether or not each letter in 
    the input string is a vowel
2.  It can 
    -  loop through the input string
    -  test each char against a regular expression
    -  return the character in upper case if the test passes, and
    -  return the character in lower casse if the test fails
3.  The result can be built in a new string as the loop iterates
    Then return the result.
*/
