/* 
=== Takeoff Fuel ===

=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-29

=== Inputs ===
Given the numbers of:
- gallons of fuel currently in your airplane
- liters of fuel required to reach your destination

=== Output ===
determine how many additional gallons of fuel you should add.

=== Functional ===
1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number. */

function fuelToAdd(currentGallons, requiredLiters) {
  let reqGallons = requiredLiters / 3.78541;
  let addGallons = Math.ceil(reqGallons - currentGallons);

  return Math.max(addGallons, 0);
}

/* 
=== Why build it this way? ===
The only catch in this challenge is that one test fails with Math.round().
This meant an implied requirement to always round up was perhaps described
by "You can only add whole gallons."
A quick correction to Math.ceil() passes all tests.
*/
