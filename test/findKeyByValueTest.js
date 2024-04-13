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
  it("returns 'drama' for bestTVShowsByGenre", () => {
    assert.strictEqual(value1, "drama");
  });
  let value2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
  it("returns undefined for bestTVShowsByGenre", () => {
    assert.strictEqual(value2, undefined); 
  });

});

