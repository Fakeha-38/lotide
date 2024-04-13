// Importing flatten.js

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  let result1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6])
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(result1, [1, 2, 3, 4, 5, 6]);
  });
});
