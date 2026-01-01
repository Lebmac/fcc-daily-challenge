/* 
=== Resolution Streak ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-01

=== Input ===
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: 
- the number of steps walked that day
- the minutes of screen time that day, and 
- the number of pages read that day; 

=== Function ===
determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:

You walked at least 10,000 steps.
You had no more than 120 minutes of screen time.
You read at least five pages.

=== Output ===
If all of the given days are successful, 
return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, 
return "Resolution failed on day X: N day streak.". 
Where 
X is the day number of the first unsuccessful day, and 
N is the number of successful days before the first unsuccessful day. */

function resolutionStreak(days) {
  let success = true;
  let pass = [10000, 120, 5];
  let index = 0;

  while (index < days.length) {
    let day = days[index];
    if (day[0] < pass[0]) { success = false; }
    if (day[1] > pass[1]) { success = false; }
    if (day[2] < pass[2]) { success = false; }
    if (!success) {
      return `Resolution failed on day ${index+1}: ${index} day streak.`
    }
    index++;
  }
  return `Resolution on track: ${index} day streak.`;
}
/* 
Write comments when can get computer on charge */
