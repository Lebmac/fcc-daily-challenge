/* 
=== Energy Consumption ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-19

=== Input ===
Given 
- the number of Calories burned during a workout, and 
- the number of watt-hours used by your electronic devices during that workout, 

=== Function ===
determine which one used more energy.
To compare them, convert both values to joules using the following conversions:
- 1 Calorie equals 4184 joules.
- 1 watt-hour equals 3600 joules.

=== Output ===
Return:
- "Workout" if the workout used more energy.
- "Devices" if the device used more energy.
- "Equal" if both used the same amount of energy. */

function compareEnergy(caloriesBurned, wattHoursUsed) {
  let workout = caloriesBurned * 4184;
  let devices = wattHoursUsed * 3600;

  return workout <= devices ? workout < devices ? "Devices" : "Equal" : "Workout";
}
