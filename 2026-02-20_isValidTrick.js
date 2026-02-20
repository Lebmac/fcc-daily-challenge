/* 
=== 2026 Winter Games Day 15: Freestyle Skiing ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-20

Given a trick name consisting of two words, determine if it is a valid 
freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, 
and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:
"Misty", "Ghost","Thunder","Solar","Sky","Phantom","Frozen","Polar"

Valid second words:
"Twister","Icequake","Avalanche","Vortex","Snowstorm","Frostbite","Blizzard","Shadow" 
*/

function isValidTrick(trickName) {
  const list1 = [
    "Misty","Ghost","Thunder","Solar",
    "Sky","Phantom","Frozen","Polar",
  ];
  const list2 = [
    "Twister","Icequake","Avalanche","Vortex",
    "Snowstorm","Frostbite","Blizzard","Shadow",
  ];

  const [word1, word2] = trickName.split(" ");

  return list1.includes(word1) &&
         list2.includes(word2);
}
