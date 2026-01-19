/* 
=== Pairwise ===
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

=== Inputs ===
Given 
- an array arr,  
- arg and return the sum of their indices.

=== Output ===
find element pairs whose sum equal the second argument

=== Function ===
You may use multiple pairs that have the same numeric elements but different indices. 
Each pair should use the lowest possible available indices. Once an element has been 
used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) 
creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are 
[7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	 1	 2	 3	 4
Value	7	 9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6 */

function pairwise(arr, arg) {
  /*  The indices of arr are stateful since they can only be used once.
      The function must remember the used state, therefore build the
      supplied array out with a place to store the state */
  const set = arr.map((el) => {
    return { 
      val: el, 
      used: false, 
    };
  });

  /*  Initialise accumulator which will eventually be returned. */
  let sum = 0;

  /*  The function must iterate through the set to perform the 
      summed pairs check on all qualifying pairs.*/
  for (let i = 0; i < set.length; i++) {
    /*  This index may have been summed with another index already.
        If true move to next*/
    if (set[i].used) { continue; }

    /*  i has been compared to all indices less than i. We can start
        from i + 1 to save time.*/
    for (let j = i + 1; j < set.length; j++) {
      /*  This index may have been summed with another index already.
          If true move to next*/
      if (set[j].used) { continue; }

      /*  Here we test for the primary requirement.
          Find pairs of indices which sum to equal the 2nd argument.*/
      if (set[i].val + set[j].val === arg) {
        /*  The state must be changed so that the indices are not
            summed a second time.*/
        set[i].used = true;
        set[j].used = true;
        /*  Finally we perform the sum and push value to the
            accumulator.*/
        sum += i + j;
        /*  We can abort the inner loop here since all further checks
            against index i are wasted time.*/
        break;
      }
    }
  }
  
  return sum;
}
