// Importing assertObjectsEqual

const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require('chai').assert;


// TEST CODE

describe("#assertObjectsEqual", () => {
  const shirtObject = { color: ["red", "green", "yellow"], size: "medium" };
  const anotherShirtObject = { size: "medium", color: ["red", "green", "yellow"] };
  const longSleeveShirtObject = {
    size: "medium",
    color: "red",
    sleeveLength: "long",
  };
  it("returns assertion passed", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject, anotherShirtObject));
  });
  it("returns assertion failed", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject, longSleeveShirtObject)); 
  });
  // it("returns  assertion passed", () => {
  //   assert.strictEqual(assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"])); 
  // });
  // it("returns assertion passed", () => {
  //   assert.strictEqual(assertArraysEqual(['4', '5', true], ['4', '5', true])); 
  // });

});



// assertObjectsEqual(shirtObject, anotherShirtObject);
// assertObjectsEqual(shirtObject, longSleeveShirtObject);