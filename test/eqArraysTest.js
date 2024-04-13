// Importing eqArrays.js

const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

// TEST CODE

describe("#eqArrays", () => {
  it("returns false for ['4', '5'] & [4, 5]", () => {
    assert.strictEqual(eqArrays(['4', '5'], [4, 5]), false);
  });
  it("returns true for [1,2,3] & [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true); 
  });
  it("returns falese fpr [1,2,3] & [1,2])", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2]), false); 
  });
  it("returns true for [] & []", () => {
    assert.strictEqual(eqArrays([], []), true); 
  });

});