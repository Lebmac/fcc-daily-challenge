/* 
=== Business Day Count ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-24

Given a start date and an end date, return the number of business days between the two.

Given dates are in the format "YYYY-MM-DD".
Weekdays are business days (Monday through Friday).
Weekends are not business days (Saturday and Sunday).
Include both the start and end dates when counting. 
*/

function countBusinessDays(start, end) {
  const _1Day = 24 * 60 * 60 * 1000;
  const _start = new Date(start);
  const _end = new Date(end);
  
  const days = (_end - _start + _1Day) / _1Day;
  const remDays = days % 7;
  
  let workDays = (days - remDays) / 7 * 5;

  for (let i = 0; i < remDays; i++) {
    let day = new Date(_end - _1Day * i).getDay();

    if (day > 0 && day < 6)
      workDays += 1;
  }  

  return workDays;
}
