/* 
=== Flatten the Array ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-28

=== Input ===
Given an array that contains nested arrays, 

=== Output ===
return a new array with all values flattened into a single, one-dimensional array. 

=== Function ===
Retain the original order of the items in the arrays 
*/

function flatten(arr) {
  if (!Array.isArray(arr)) return arr;
  
  return arr.reduce((items, item) => {
    return items.concat(flatten(item));
  }, []);
}

/* 
=== Design Rationale ===
1.  Arrays can be nested as deep as the user desires, recursion is required.
2.  Thinking from the bottom up, the simplest input is a non-array.
    If a non array is received, return it.
3.  Now to handle arrays.
    If an array is received, loop through elesments
    call flatten for each element
    Join the resulting array or value to an array of results so far.
*/

