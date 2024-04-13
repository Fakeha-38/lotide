// Importing assertArraysEqual

const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

// TEST CODE

describe("#assertArraysEqual", () => {
  it("returns assertion passed", () => {
    assert.strictEqual(assertArraysEqual([34, 56], [34, 56]));
  });
  it("returns assertion passed", () => {
    assert.strictEqual(assertArraysEqual([34, 56], [34, 56])); 
  });
  it("returns  assertion passed", () => {
    assert.strictEqual(assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"])); 
  });
  it("returns assertion passed", () => {
    assert.strictEqual(assertArraysEqual(['4', '5', true], ['4', '5', true])); 
  });

});

