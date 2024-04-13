const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = require('./eqArrays');
const eqObjects = function(obj1, obj2) {
  let setResult = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        setResult = eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        setResult = false;
        return setResult;
      }
    }
  } else {
    setResult = false;
    return setResult;
  }
  return setResult;
};
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "mediu", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
