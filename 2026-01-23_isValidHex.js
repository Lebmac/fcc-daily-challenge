/* 
=== Hex Validator ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-23

=== Input / Output ===
Given a string, determine whether it is a valid CSS hex color.

=== Function ===
A valid CSS hex color must:
- Start with a #, and
- be followed by either 3 or 6 hexadecimal characters.
- Hexadecimal characters are numbers 0 through 9 and letters a through f 
  (case-insensitive). */

function isValidHex(str) {
  return /^#[A-Fa-f0-9]{3,6}$/.test(str);
}

/*
=== Design rationale ===
The function tests for valid patterns in a given string
Therefore regex is the most appropriate utility for this function.

The whole string must be valid, 
therefore ^ and $ ensure we do not test some valid substring within a
larger string. The pattern described by the regex shall match the
string from start to finish.

The string must always start with "#" per the hexidecimal spec.
The regular expression needs to start with this character.

The string must then only contain instances of valid hexadecimal chars
0-9, a-f, or A-F. Placing these in square brackets defines the set
of vaid chars like [0-9a-fA-F]. 

Before closing the regex, it must specify valid counts of
chars from the char set. This is done with curly brackets.
3 or 6 consecutive chars must be present like {3,6}.

The regex can then be closed. The given string is tested against
the regex and validity is returned as a boolean state.
*/
