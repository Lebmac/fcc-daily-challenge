/*
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

=== Implement Quick Sort ===
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an 
efficient, recursive divide-and-conquer approach to sorting an array. In this method, a 
pivot value is chosen in the original array. The array is then partitioned into two 
subarrays of values less than and greater than the pivot value. We then combine the result 
of recursively calling the quick sort algorithm on both sub-arrays. This continues until 
the base case of an empty or single-item array is reached, which we return. The unwinding 
of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. 
It is also relatively easy to implement. These attributes make it a popular and useful 
sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and 
returns an array of these integers in sorted order from least to greatest. While the choice 
of the pivot value is important, any pivot will do for our purposes here. For simplicity, 
the first or last element could be used.
*/

function quickSort(array) {
  // Only change code below this line
  if (array.length < 2) return array;
  let arr = array.map(e => {return e});

  // 1) choose first element as pivot
  // 2) build 2 arrays from remaining elements
  //    one has all elaments less than pivot
  //    two has all elements equal or greater than pivot 
  let minArr = [];
  let maxArr = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < arr[0] ? 
    minArr.push(arr[i]) :
    maxArr.push(arr[i]) ;
  }

  // call self on arrays one and two built above
  minArr = quickSort(minArr);
  maxArr = quickSort(maxArr);

  // return arrays like less than pivot, then pivot, then all others
  return [...minArr, arr[0], ...maxArr];
  // Only change code above this line
}
