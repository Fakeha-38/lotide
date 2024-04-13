// Importing eqObjects.js
const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

// TEST CODE

describe("#EqualObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = {
    size: "medium",
    color: "red",
    sleeveLength: "long",
  };

  it("returns falese for shirtObject & longSleeveShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it("returns true for shirObject & anotherShirtObject", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true); 
  });
  // it("returns  assertion passed", () => {
  //   assert.strictEqual(assertEqual("Fakeha", "Fakeha")); 
  // });
  // it("returns assertion passed", () => {
  //   assert.strictEqual(assertEqual(26, 26)); 
  // });

});

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);