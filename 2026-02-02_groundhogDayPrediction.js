/* 
=== Groundhog Day ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-02

Today is Groundhog Day, in which a groundhog predicts the weather based on whether or not it sees its shadow.

=== Input / Output ===
Given a value representing the groundhog's appearance, return the correct prediction:

If the given value is the boolean true (the groundhog saw its shadow), return "Looks like we'll have six more weeks of winter.".
If the value is the boolean false (the groundhog did not see its shadow), return "It's going to be an early spring.".
If the value is anything else (the groundhog did not show up), return "No prediction this year.". 
*/

function groundhogDayPrediction(appearance) {
  const msg = new Map([
    [appearance, "No prediction this year."],
    [true,  "Looks like we'll have six more weeks of winter."],
    [false, "It's going to be an early spring."],
  ]);

  return msg.get(appearance);
}
