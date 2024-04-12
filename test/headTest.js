// Importing assertEqual.js & head.js

const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 87, [3535], "some string"]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");