const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const eqObjects = function(obj1, obj2) {
  let setResult = true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      setResult = false;
      return setResult;
    }
  }
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      setResult = false;
      return setResult;
    }
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
