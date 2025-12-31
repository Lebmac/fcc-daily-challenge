/* 
=== Sum the String ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-30

=== Input ===
Given a string containing digits and other characters

=== Output ===
return the sum of all numbers in the string.

=== Function ===
Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters. */

function stringSum(str) {
  let isNum = /^[0-9]$/;
  let num = "";
  let sum = 0;

  for (const char of str) {
    if (isNum.test(char)) {
      num += String(char);
    } else {
      sum += Number(num);
      num = "";
    }
  }
  return sum + Number(num);
}

/* 
=== Initial thoughts ===
I think there is a better way to do this with String.match() and a smarter regular expression to find all consecutive numbers in an array.
The ideal output of this function would be an array of numbers which is then be summed with Array.reduce((sum, num) => {return sum + num;).
Regular expression like /\d+/g. The regex worked in snippets, but not in free code camp's test environment. Some type protection is
required.
*/
function(string) {
  let array = string.match(/\d+/g);
  return array.reduce((sum, num) => {return sum + num;);
}
/*
=== Design spec === 
1.  The function must detect integers in a string: 
    -  Use regex comparison to detect number characters
2.  The function must recognise consecutive integers:
    -  The function needs to inspect each character for it's "type" number or not-number, iterating through the string is required.
    -  The iteration has some statefulness. It must store each number found until it can verify the next character is not a number. 
       Some memory is required.
    -  Memory must be in string format to concatenate consecutive numbers
    -  JS will try to sum strings of numbers instead of concatenating, "+" operator is overloaded. Explicit type declaration is required
3.  The function must not sum numbers until a subsequence non-number character is found
    -  The last character could be a number and not have a subsequent character. A final sum must therefore be performed outside of the loop
    -  A sum must be performed inside the loop whenever a non-number is detected. The function must be resilient to summing a null value.
    -  The run-time environment may have knowledge of the multi-digit number being constructed as a string, be type safe and explicit 
       to prevent "+" from performing concatenation.
    -  Once the multi-digit number has been summed, it's memory placeholder must be cleared so as not to join the next new number detected.
*/
