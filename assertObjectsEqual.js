const eqArrays = function(arr1, arr2) {
  let setResult = true;
  if (arr1.length === arr2.length) {
    for (let el = 0; el <= arr1.length; el++) {
      if (arr1[el] !== arr2[el]) {
        setResult = false;
        return setResult;
      }
    }
    setResult = true;
    return setResult;
  }
  setResult = false;
  return setResult;
};
// console.log(eqArrays(["red", "green"], ["red", "glue"]));
const eqObjects = function(obj1, obj2) {
  let setResult = true;
  for (let key in obj1) {
    if (typeof obj1[key] === "object") {
      setResult = eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      setResult = false;
      return setResult;
    }
  }
  for (let key in obj2) {
    if (typeof obj2[key] === "object") {
      setResult = eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      setResult = false;
      return setResult;
    }
  }
  return setResult;
};
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  // console.log(`Example label: ${inspect(obj1)}`);

  if (eqObjects(obj1, obj2)) {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`,
    );
  } else {
    console.log(
      `❌❌❌ Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`,
    );
  }
  // Implement me!
};
const shirtObject = { color: ["red", "green"], size: "medium" };
const anotherShirtObject = { size: "medium", color: ["red", "green"] };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
