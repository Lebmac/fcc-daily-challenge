/* 
=== Odd or Even Day ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-27

=== Input ===
Given a timestamp (number of milliseconds since the Unix epoch), 

=== Output ===
return:
"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, 
return "odd" because the day number (27) is an odd number.
 */

function oddOrEvenDay(timestamp) {
  let date = new Date(timestamp);
  return date.getUTCDate() % 2 === 0 ? "even" : "odd";
}

/* 
This deceptively simple function tripped me up initially.

I'm sure many people who live within 1 hour of UTC got this right inadvertently.
But for those in different timezones, the addition of UTC is mandatory.

Cool challenge. I knew immediately why it failed some tests, but needed to
discover the getUTCDate() method. A dirtier option would have been to subtract
some offset from the argument - but we're better than that.
*/
