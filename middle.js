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

const middle = function (arr) {
  let middArray = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return (middArray = []);
  } else {
    middIndex = Math.floor(arr.length / 2);
    if (middIndex % 2 === 0) {
      middArray.push(arr[middIndex - 1], arr[middIndex]);
      return middArray;
    } else {
      middArray.push(arr[middIndex]);
      return middArray;
    }
  }
};

console.log(middle([2, 'mid if array', 54]));
console.log(middle([2, 4, 6, 58, 8, 5, 6, 7]));
