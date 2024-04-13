// Importing map.js

const assert = require('chai').assert;
const map   = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, (word) => word[0]);
  const expected1 = ['g', 'c', 't', 'm', 't'];

  it("returns ['g', 'c', 't', 'm', 't'] for words", () => {
    assert.deepEqual(results1, expected1);
  });

});