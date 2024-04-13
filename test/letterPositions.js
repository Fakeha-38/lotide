// Importing letterPositions.js

const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [2,3] for \"hello\"", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
  });
  it("returns [1,5] for \"Fakeha\"", () => {
    assert.deepEqual(letterPositions("Fakeha").a, [1,5]);
  });
});
