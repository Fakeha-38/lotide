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

const flatten = function (arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
