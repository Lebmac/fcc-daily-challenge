/* 
=== Scaled Image ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-25

=== Input ===
Given 
- a string representing the width and height of an image, and 
- a number to scale the image, 

=== Output ===
return the scaled width and height.

=== Function ===
The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format. */

function scaleImage(size, scale) {
  const [x,y] = size.split("x");
  
  return `${scale*x}x${scale*y}`;
}

