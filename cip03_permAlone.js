/*
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please 
*/

function permAlone(str) {
  let permutations = getPermutationList(str);
  let doubleLetters = /(.)\1/;
  let out = [];

  // Test permutations against acceptance criteria
  // in this case, any permutation with adjacent identical letters
  // is rejected. The length of the out array is returned.
  permutations.forEach(permutation => {
    if (!doubleLetters.test(permutation)) {
      out = [...out, permutation];
    }
  })
  
  return out.length;
}

// Recursive function
// - drills down substrings until receiving a single char as arg
// - IF in the first case
//    a single char is received, return it as the sole permutation
//    (important to send as array. forEach will not be able to iterate
//    over the sole permutation of char).
// - ELSE
//    iterate through each char in string
//    isolate current char
//    call self on remaining chars (returning permutations)
//    iterate through each returned permutation, adding it to the isolated char
//    return the list of permutations to caller
function getPermutationList(str) {
  if (str.length < 2) return [str];

  let permutations = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let subStr = str.substring(0, i) + 
                 str.substring(i + 1, str.length);
    
    let subPerms = getPermutationList(subStr);

    subPerms.forEach(perm => {
      permutations = [...permutations, char + perm];
    });
  }

  return permutations;
}
