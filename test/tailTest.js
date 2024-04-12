// Importing assertEqual.js & tail.js

const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length - 1) // tail should have one element less than its input
assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
assertEqual(tail([]).length, 0) // tail of an 