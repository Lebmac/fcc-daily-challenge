/* 
=== Digital Detox ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-01

=== Input / Output ===
Given an array of your login logs, determine whether you have met your digital detox goal.

=== Function ===
Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:

You logged in no more than once within any four-hour period.
You logged in no more than 2 times on any single day. 
*/

function digitalDetox(logs) {
  const timeGoal = 4 * 60 * 60 * 1000;
  const qtyGoal = 2;
  const utLogs = logs.map(log => new Date(log))
                     .sort((a,b) => a - b);

  let date = utLogs[0].toDateString();
  let qty = { [date]: 1 };
  
  for (let i = 1; i < utLogs.length; i++) {
    date = utLogs[i].toDateString();
    qty = { [date]: (qty[date] ?? 0) + 1 };

    if (qty[date] > qtyGoal)
      return false;
    if (utLogs[i] - utLogs[i-1] < timeGoal)
      return false;
  }

  return true;
}
