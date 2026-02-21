/*
=== 2026 Winter Games Day 16: Curling ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-21

Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:

The center cell (index [2, 2]) is the "button".
The 8 cells directly surrounding the button represent ring 1.
And the 16 cells on the outer edge of the house represent ring 2.
In the given matrix:

"." represents an empty space.
"R" represents a space with a red stone.
"Y" represents a space with a yellow stone.
Scoring rules:

Only one team can score per round.
The team with the stone closest to the button scores.
The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
The lower the ring number, the closer to the center the stone is.
If both teams' closest stone is the same distance from the center, no team scores.
Return:

A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.
For example, given:

[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest. 
*/

function scoreCurling(house) {
  const rings = pivotHouseToRings(house);

  let r_acc = 0, y_acc = 0;
  for(let i = 0; i < rings.length; i++) {
    const {R, Y} = countStones(rings[i]);
    
    if (r_acc > 0 && Y > 0) break;
    if (y_acc > 0 && R > 0) break;
    if (R > 0 && Y > 0) break;
    
    r_acc += R;
    y_acc += Y;
  }

  if (r_acc > 0) return `R: ${r_acc}`;
  if (y_acc > 0) return `Y: ${y_acc}`;
  return "No points awarded";
}

function pivotHouseToRings(house) {
  return [
    [house[2][2]],
    [
      ...house[1].filter((_,i) => i>=1 && i<=3),
      ...house[2].filter((_,i) => i==1 || i==3),
      ...house[3].filter((_,i) => i>=1 && i<=3)
    ],
    [
      ...house[0],
      ...house[1].filter((_,i) => i==0 || i==4),
      ...house[2].filter((_,i) => i==0 || i==4),
      ...house[3].filter((_,i) => i==0 || i==4),
      ...house[4]
    ]
  ];
}

function countStones(arr) {
  return arr.reduce((count, stone) => {
    return stone === "." ? 
           count : 
           { ...count, [stone]: count[stone] += 1, };
  }, { R: 0, Y: 0, });
}
