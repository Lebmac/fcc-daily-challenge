/* 
=== Implement Binary Search ===
=== Source === 
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

Binary search is an O(log(n)) efficiency algorithm for searching 
a sorted array to find an element. It operates using the following steps:

Find the middle value of a sorted array. If value == target return true 
(The value has been found and the search is complete).
If middle value < target, search right half of array in next compare.
If middle value > target, search left half of array in next compare.
If after searching the whole array the value is not present, return false 
(The array has been searched and the value is not in the array).
As you can see, you are successively halving an array, which gives you the 
log(n) efficiency. For this challenge, we want you to show your work - how you 
got to the target value... the path you took!

Write a function binarySearch that implements the binary search algorithm on an 
array, returning the path you took (each middle value comparison) to find the 
target in an array.

The function takes a sorted array of integers and a target value as input. It 
returns an array containing (in-order) the middle value you found at each 
halving of the original array until you found the target value. The target 
value should be the last element of the returned array. If the value is not 
found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

For this challenge, when halving, you MUST use Math.floor() when doing division: 
Math.floor(x/2). This will give a consistent, testable path.

Note: The following array will be used in tests:

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
]; 
*/

function binarySearch(searchList, value) {
  // value not found.
  // We'll send back an empty array, and use the value of
  // the last element in the ancestor tree to determine
  // if value was found.
  if (searchList.length < 1) return []; 

  // determine target element and arrays each side of the target
  const target = Math.floor((searchList.length - 1) / 2);
  const lt = searchList.slice(0, target);
  const gt = searchList.slice(target + 1);

  // if target matches value it is the final search result.
  // Return it as a single el array which will be appended
  // to the end of parent call return functions like
  // [..., grandparentTargetVal, parentTargetVal, myTargetVal]
  if (value === searchList[target]) return [value];

  // choose less-than or greater-than array to continue binary
  // search with
  let test = value < searchList[target];
  let path = binarySearch(test ? lt : gt, value);

  // check that the last ancestor found value. If not found
  // path.at() becomes falsy for all parent ancestors
  return path.at(-1) === value ? 
    [searchList[target]].concat(path) : 
    "Value Not Found";
}
