/* 
=== Circular Prime ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-09

=== Input / Output ===
Given an integer, determine if it is a circular prime.

=== Function ===
A circular prime is an integer where all rotations of its digits are themselves prime.
For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.
*/

function isCircularPrime(n) {
    let circularNums = rotateInt(n);

    return circularNums.reduce((isCircular, num) => {
        return isCircular && isPrime(num);
    }, true);
}

function rotateInt(arg) {
    let str = arg.toString();
    let len = str.length;
    let rot = new Array(len);
    
    for (let i in str) {
        str = str.substring(1, len) + str[0];
        rot[i] = Number(str);
    }

    return rot.sort();
}

function isPrime(n, factor = 2) {
    if (factor ** 2 > n) return true;
    if (n % factor === 0) return false;

    return isPrime(n, factor + 1);
}

/* 
=== Design Rationale ===
This challenge has three non-trivial components
1. Determine if any given number is prime - warrants a function
2. Produce an array of numbers which are circular to some given input - warrants a function
3. Determine prime status of all produced numbers, return a logical AND of all the prime statuses

Firstly - primes can be calculated and approximated in many ways, I prefer the recursive
approach, it is a well accepted technique and simple to code.

Secondly - to compute circular numbers, the input number must be parsed as a string to
facilitate character swapping. The function will:
- iterate over the input string
- each time moving the first character to the end of the remaining substring.
- parse the string back to a number
- push the number to an array
- return array containing the complete set of rotations as integers

Thirdly - The function must calculate and store the primality of all circular numbers.
However, this is not strictly true, and would be computationally expensive. The function 
can stop calculating primality once a non-prime is discovered. To speed things up a little 
bit more the function will sort the array of circulars from small to large - more efficient.
When a non-prime is found the programme can stop. 
- The function will take advantage of the && operator and a nullifying boolean on the
  left hand side of the operator.
- The boolean will initialise true, and be set to false when a non-prime is found.
  Like:
    ```
    isEveryNumberPrimeSoFar = true
    Loop for Nums: isEveryNumberPrimeSoFar &&= isPrime(currentNum) 
    return isEveryNumberPrimeSoFar
    ```
isPrime -- the most expensive part of this function -- will not execute once
isEveryNumberPrimeSoFar turns falsey.

 */
