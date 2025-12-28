/* 
=== SCREAMING_SNAKE_CASE ===

=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-28

=== Function ===
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.
Make all letters uppercase
Separate words with an underscore (_)

=== Example input ===
The given variable names will be written in one of the following formats:

camelCase
PascalCase
snake_case
kebab-case
In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

=== Example output ===
To convert to SCREAMING_SNAKE_CASE:
*/

function toScreamingSnakeCase(variableName) {
  const caps = /^[A-Z]$/;
  const dash = /^-$/;
  var snake = variableName;

  // don't evaluate position 0
  for (var i = snake.length; i > 0; i--) {
    if (caps.test(snake[i])) { 
      snake = snake.slice(0, i) + "_" + snake.slice(i); 
    }
    if (dash.test(snake[i])) { 
      snake = snake.slice(0, i) + "_" + snake.slice(i + 1); 
    }
  }
  return snake.toUpperCase();  
}

/* 
=== Why did I build it this way? === 
1.  The function is required to insert an underscore BEFORE any capital letter (excluding string[0]).
    This meant scanning the string from char 0 to the end would cause repeat inspections of the same
    capital letter, since its index increases with every prefixed underscore.
2.  The easy solution was to work back from the end towards char 0 since all chars in front of the new
    underscore remain in position.
3.  The 0th char was not inspected, because an underscore should not be prefixed to the front of the
    string
4.  Any instance of "-" was changed to "_" for snake_case underscore requirement
5.  Finally the string can be returned toUpperCase to satisfy the SCREAMING all caps requirement

*/
