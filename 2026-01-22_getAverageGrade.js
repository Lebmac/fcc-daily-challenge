/* 
=== Class Average ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-22

=== Input ===
Given an array of exam scores (numbers), 

=== Output ===
return the average score in form of a letter grade according to the following chart:

=== Function ===
Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A−"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores. */

function getAverageGrade(scores) {
  let grades = ["F","D","C","B","A"];
  let suffixes = ["-","-","-","","","","","+","+","+"];
  
  let avg = scores.reduce((acc,val) => { 
      return acc += val;
    }) / scores.length;
  
  let grade = Math.ceil(clamp(0, avg - 59, 40) / 10);
  let suffix = Math.round(clamp(-1, avg - 60, 39) % 10);

  return grades[grade] + (suffixes[suffix] || "");
}

function clamp(min, num, max) {
  return min >= num ? min : max <= num ? max : num;
}
