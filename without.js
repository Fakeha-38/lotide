// const eqArrays = function (arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let el = 0; el <= arr1.length; el++) {
//       if (arr1[el] !== arr2[el]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// };
// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`❌❌❌ Assertion failed: ${arr1} !== ${arr2}`);
//   }
// };

const without = function(source, itemsToRemove) {
  let arrayWithout = [];
  for (let i = 0; i < source.length; i++) {
    let test = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        test = true;
      } else {
        test = false;
        break;
      }
    }
    if (test) {
      arrayWithout.push(source[i]);
    }
  }
  return arrayWithout;
};
module.exports = without;
