"use strict";
/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]

 */
Object.defineProperty(exports, "__esModule", { value: true });
const towerBuilder = (nFloors) => {
    const maxFloorWidth = (nFloors * 2) - 1;
    const tower = [];
    for (let i = 1; i <= maxFloorWidth; i += 2) {
        tower.push(`${" ".repeat((maxFloorWidth - i) / 2)}${"*".repeat(i)}${" ".repeat((maxFloorWidth - i) / 2)}`);
    }
    return tower;
};
towerBuilder(3).forEach((floor) => {
    console.log(floor);
});
