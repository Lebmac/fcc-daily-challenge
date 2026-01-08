/* 
=== Sorted Array? ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-08

=== Input ===
Given an array of numbers, 

=== Function ===
determine if the numbers are sorted in ascending order, descending order, or neither.

=== Output ===
If the given array is:
In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted". */

function isSorted(arr) {
  let status = 3;
  let result = [
    "Not sorted",
    "Ascending",
    "Descending",
    "Arg length error"
  ];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] <= arr[i]) { status = status & 1; }
    if (arr[i-1] >= arr[i]) { status = status & 2; }
  }

  return result[status];
}

/*
=== Design Rationale === 
The function needs to keep track of two states: isAscending? and isDescending?
On function call, either could be true, so I set about storing each state in its own
boolean variable

It was clear the function needed to loop through each element and compare itself
to it's neighbour. If the isAscending? and isDescending? state was found to be
false, the respective state variable would be set false.

At this point I realised asking questions of the two individual booleans would require
some inelegant if logic. 
I thought about combining the booleans into a number,and the hexadecimal concept
came to mind. I would define a "2-bit" number, where each bit stored the state of
isAscending? and isDescending? If a state was tested and found to be false, bitwise
AND could be used to set the respective state false in hex.

Finally, the combined booleans could be interpreted as an int to look up a test result 
in an array containing all possible outcomes.
*/
