/* 
=== Plant the Crop ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-12

=== Input ===
Given 
- an integer representing the size of your farm field, and 
- "acres" or "hectares" representing the unit for the size 
  of your farm field, and 
- a type of crop, 

=== Output ===
determine how many plants of that type you can fit 
in your field.

=== Function ===
1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.

Here's a list of crops that will be given as input 
and how much space a single plant takes:
Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters

Return the number of plants that fit in the field, 
rounded down to the nearest whole plant. */

function getNumberOfPlants(fieldSize, unit, crop) {
  const crops = {
    corn: 1.0,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2,
  };
  const units = {
    acres: 4046.86,
    hectares: 10000,
  };

  return Math.floor(fieldSize * units[unit] / crops[crop]);
}

/* 
=== Design Rationale ===
Given strings as selectors for crop and conversion factor,
it is simplest to build a switch where the input selectors
choose the correct value from an object. The object maps
selectors to factors without making unnecessary checks for
other candidate inputs.
*/
