/* 
=== Blood Type Compatibility ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-23

Given a donor blood type and a recipient blood type, determine 
whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. 
For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to 
the recipient. 
*/

function canDonate(donor, recipient) {
  const [d_Ab, d_Rh] = donor.match(/O|[AB]+|\-|\+/g);
  const [r_Ab, r_Rh] = recipient.match(/O|[AB]+|\-|\+/g);

  if (d_Ab == "O" || r_Ab.includes(d_Ab))
    if (d_Rh == "-" || r_Rh == "+")
      return true;

  return false;
}
