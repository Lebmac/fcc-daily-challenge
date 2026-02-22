/*
=== 2026 Winter Games Day 17: Closing Day ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-22

Given a 2D array of medal winners, return a medal count for each 
country as a CSV string.

In the given array, each sub-array represents a single event: 
[gold_winner, silver_winner, bronze_winner]

The returned CSV string should have the following format, with the 
first line being headers:

Country,Gold,Silver,Bronze,Total
country_name,gold_count,silver_count,bronze_count,total_medals
Separate new lines with the new line character ("\n").
Do not include spaces around commas or at the end of lines.
Sort the returned CSV by gold medal count, highest first. If two 
countries have the same gold medal count, sort the tied ones alphabetically.
For example, given:

[
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]
Return:

"Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
Which looks like this when printed:

Country,Gold,Silver,Bronze,Total
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1
*/

function countMedals(winners) {
  let tallyObj = toTallyByCountry(winners);
  let tallyArr = toKeyedArray(tallyObj).sort((a,b) => {
    if (a[1] != b[1]) 
      return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  let head = "Country,Gold,Silver,Bronze,Total\n";
  let data = tallyArr.map(tally => tally.join(",")).join("\n");

  return head + data;
}

function toTallyByCountry(winners) {
  let data = {};

  winners.forEach((sport) => {
    sport.forEach((country, place) => {
      if (!(country in data))
        data[country] = [0,0,0,0];

      data[country][place] += 1;
      data[country][3] += 1;
    });
  });

  return data;
}

function toKeyedArray(obj) {
  return Object.keys(obj)
    .reduce((arr, key) => {
      return [...arr, [key].concat(obj[key])];
    }, []);
}
