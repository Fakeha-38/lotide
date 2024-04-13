// Importing head.js

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const assertEqual = require("../assertEqual");

describe("#findKeyByValye", () => {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  let value1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(value1, "drama");
  });
  let value2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
  it("returns '5' for ['5']", () => {
    assert.strictEqual(value2, undefined); 
  });
  // it("returns '5' for [5, 87, [3535], \"some string\"]", () => {
  //   assert.strictEqual(head([5, 87, [3535], "some string"]), 5); 
  // });
  // it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
  //   assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  // });

});



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
