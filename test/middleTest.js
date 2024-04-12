// Importing middle.js
// const middle = require('../middle')
// const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual(middle([2, 'mid of array', 54]), ['mid of array']);
// assertArraysEqual(middle([2, 4, 6, 58, 8, 5, 6, 7]), [58, 8]);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  it("returns [2, \'mid of array\', 54] for ['mid of array']", () => {
    assert.deepEqual(middle([2, 'mid of array', 54]), ['mid of array']);
  });
  it("returns [58, 8] for [2, 4, 6, 58, 8, 5, 6, 7]", () => {
    assert.deepEqual(middle([2, 4, 6, 58, 8, 5, 6, 7]), [58, 8]); 
  });

});