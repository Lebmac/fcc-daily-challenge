/* 
=== 2026 Winter Games Day 8: Luge ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-13
Given an array of five numbers, each representing the time (in seconds) it took a luger to complete a segment of a track, determine which segment had the fastest speed and what that speed was.

The track is divided into the following segments:

Segment 1: 320 meters
Segment 2: 280 meters
Segment 3: 350 meters
Segment 4: 300 meters
Segment 5: 250 meters
The first value in the given array corresponds to the time for segment 1, the second value to segment 2, and so on.

To calculate the speed (in meters per second) for a segment, divide the distance by the time.

Return "The luger's fastest speed was X m/s on segment Y.". Where X is the fastest speed, rounded to two decimal places, and Y is the segment number where the fastest speed occurred. 
*/

function getFastestSpeed(times) {
  let sections = [320,280,350,300,250];
  let maxSpeed = -Infinity;
  let section = 0;

  for (let i=0; i<sections.length; i++) {
    let speed = (sections[i]/times[i]).toFixed(2);
    if (speed > maxSpeed) {
      maxSpeed = speed;
      section = i+1;
    }
  }

  return `The luger's fastest speed was ${maxSpeed} m/s on segment ${section}.`;
}
