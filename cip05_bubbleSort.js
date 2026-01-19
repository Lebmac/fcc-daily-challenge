/* 
=== Implement Bubble Sort ===
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort

This is the first of several challenges on sorting algorithms. Given an array of unsorted items, 
we want to be able to return a sorted array. We will see several different methods to do this and 
learn some tradeoffs between these different approaches. While most modern languages have built-in 
sorting methods for operations like this, it is still important to understand some of the common
basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array 
and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely 
sorted. It does this by comparing adjacent items and swapping them if they are out of order. The 
method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has 
quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an 
array of these integers in sorted order from least to greatest. */

function bubbleSort(array) {
  // Only change code below this line
  let arr = array.slice();
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        sorted = false;
        let bubble = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = bubble;
      }
    }
  } 

  return arr;
  // Only change code above this line
}
