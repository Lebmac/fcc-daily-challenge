/* 
=== Tire Pressure ===
=== Source
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-05

=== Input ===
Given: 
- an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and 
- another array of two numbers representing the minimum and maximum pressure for your tires in bar, 

=== Output ===
return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
 */

function tireStatus(pressuresPSI, rangeBar) {
  let status = new Array(4).fill("Good");
  let conversion = 14.5038;
  let range = {
    min: rangeBar[0] * conversion,
    max: rangeBar[1] * conversion,
  }
  
  pressuresPSI.forEach((psi, wheel) => {
    if (psi < range.min) { status[wheel] = "Low"; }
    if (psi > range.max) { status[wheel] = "High"; }
  });

  return status;
}

/* 
=== design rationale === 
1.  Convert units from bar to psi. I will structure this into a nice object.
    It's not necessary for the small context of this function, but as context
    size increases it's nice to cluster values together in objects with meaningful
    names and suffixes.
2.  Create an array for the function output, populate with the "normal" value, then
    check for the abnormal conditions and write the abnormal condition to the
    applicable array index if needed.
*/
