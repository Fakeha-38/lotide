// Importing assertEqual.js & eqArrays.js

const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays(['4', '5'], [4, 5]), false);
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2,3], [1,2]), false);
assertEqual(eqArrays([], []), true);