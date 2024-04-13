// Importing without.js

const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns ['world] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse", "hello"]), ["world"]);
  });
  it("returns ['hello', 'world] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
  });

});