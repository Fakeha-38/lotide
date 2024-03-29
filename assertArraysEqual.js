const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let el = 0; el <= arr1.length; el++) {
      if (arr1[el] !== arr2[el]) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([34, 56], [34, 56]);