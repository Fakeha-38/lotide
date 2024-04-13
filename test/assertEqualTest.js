// Importing assertEqual.js
const assert = require('chai').assert;
const assertEqual = require("../assertEqual");

// TEST CODE

describe("#assertEqual", () => {
  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual("Bootcamp", "Bootcamp"));
  });
  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
  it("returns  assertion passed", () => {
    assert.strictEqual(assertEqual("Fakeha", "Fakeha")); 
  });
  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual(26, 26)); 
  });

});