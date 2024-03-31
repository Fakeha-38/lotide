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
const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (let letters of sentence) {
    if (letters !== " ") {
      if (results[letters] === undefined) {
        results[letters] = [position];
      } else {
        results[letters].push(position);
      }
    }
    position++;
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").l, [1]);