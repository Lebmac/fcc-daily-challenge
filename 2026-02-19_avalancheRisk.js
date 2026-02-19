/* 
=== 2026 Winter Games Day 14: Ski Mountaineering ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-19

Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

              "Shallow"  "Moderate"	  "Deep"
"Gentle"	    "Safe"	   "Safe"	      "Safe"
"Steep"	      "Safe"     "Risky"	    "Risky"
"Very Steep"	"Safe"	   "Risky"	    "Risky"
 */

function avalancheRisk(snowDepth, slope) {
  if (snowDepth === "Shallow") return "Safe";
  if (slope === "Gentle") return "Safe"

  return "Risky";
}
