// === scope ===
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

// How did I find this exercise? Challenging. I was determined to avoid nested loops.
// No doubt there is a better solution out there which leverages a not-so-obvious property of
// the symmetric difference concept. This is the first time I've encountered such a concept
// so I am happy to have produced this solution.

function sym(...args) {
  let sdArray = [];

  // to elegantly manage 3+ args, there is a wasted scan in which arg 1
  // is compared to a null array. This is done because args[0] may contain
  // duplicates. It would require pre-processing to write directly to sdArray
  // on init, prior to looping.
  // The work done in the null scan is basically the same.
  for (let i = 0; i < args.length; i++) {
    sdArray = symmetricDif(sdArray, args[i]);
  }
  
  return sdArray;
}

function symmetricDif(arr1, arr2) {
  // Remove duplicate numbers from both input arrays.
  let arg1 = [...new Set(arr1)];
  let arg2 = [...new Set(arr2)];
  // Combine sets and sort. Numbers which occur
  // in both sets will now be adjacent. This is an easy case
  // to scan for without nesting loops. Numbers will not occur
  // more than 2 times.
  let nums = arg1.concat(arg2).sort();

  // Initialise the output array. The loop will push non-duplicate
  // numbers to this.
  let diff = [];

  // The loop shall check for adjacent duplicate numbers.
  // When adjacent duplicates are detected, skip them both by
  // incrementing the iterator twice. If a unique number is detected
  // it is pushed to diff[] and the iterator is incremented once.
  let i = 0;
  while (i < nums.length) {
    if (nums.at(i) === nums.at(i+1)) {
      i += 2;
    } else {
      diff = [...diff, nums.at(i)];
      i += 1;
    }
  }
  
  return diff;
}
