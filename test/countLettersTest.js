// Importing countLetters.js
const assert = require('chai').assert;
const countLetters = require("../countLetters.js");

// TEST CODE

describe("#countLetters", () => {
  
const result = countLetters('lighthouse in the house');
// assertEqual(result['l'], 1);
// assertEqual(result['i'], 2);

  it("returns 1 for \"l\" in \"lighthouse in the house\"", () => {
    assert.strictEqual(result['l'], 1);
  });
  it("returns 2 for \"i\" in \"lighthouse in the house\"", () => {
    assert.strictEqual(result['i'], 2); 
  });
  it("returns undefined for \"w\" in \"lighthouse in the house\"", () => {
    assert.strictEqual(result['w'], undefined); 
  });

});