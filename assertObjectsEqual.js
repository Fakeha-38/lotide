// const eqArrays = function(arr1, arr2) {
//   let setResult = true;
//   if (arr1.length === arr2.length) {
//     for (let el = 0; el < arr1.length; el++) {
//       if (arr1[el] !== arr2[el]) {
//         setResult = false;
//         return setResult;
//       }
//     }
//     setResult = true;
//     return setResult;
//   }
//   setResult = false;
//   return setResult;
// };
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// const eqObjects = function(obj1, obj2) {
//   let setResult = true;
//   if (Object.keys(obj1).length === Object.keys(obj2).length) {
//     for (let key in obj1) {
//       if (Array.isArray(obj1[key])) {
//         setResult = eqArrays(obj1[key], obj2[key]);
//       } else if (obj1[key] !== obj2[key]) {
//         setResult = false;
//         return setResult;
//       }
//     }
//   } else {
//     setResult = false;
//     return setResult;
//   }
//   return setResult;
// };
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`,
    );
  } else {
    console.log(
      `❌❌❌ Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`,
    );
  }
};

module.exports = assertObjectsEqual;

