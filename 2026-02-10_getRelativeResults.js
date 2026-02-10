/* 
=== 2026 Winter Games Day 5: Cross-Country Skiing ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-10

Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

Given times are strings in "H:MM:SS" format.
Given times will be in order from fastest to slowest.
The winners time (fastest time) should correspond to "0".
Each other time should show the time behind the winner, in the format "+M:SS".
For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].
 */

function getRelativeResults(results) {
  const times = results.map((t) => {
    return timeToSeconds(t);
  }).sort((a,b) => a-b);
  
  const winner = times[0] * 1;
  
  return times.map((t) => {
    return secondsToMins(t - winner);
  });

}

function timeToSeconds(time) {
  const [h,m,s] = time.split(":");
  return h * 3600 + m * 60 + s * 1;
}

function secondsToMins(time) {
  if (time == 0) return String(0);

  let s = time % 60;
  let m = (time - s) % 3600 / 60;
  
  s = String(s).padStart(2, "0");

  return `+${m}:${s}`;
}
