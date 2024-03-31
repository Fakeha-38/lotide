const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(myString) {
  let myCountObject = {};
  for (let i of myString) {
    if (i !== " ") {
      if (myCountObject[i] === undefined) {
        myCountObject[i] = 1;
      } else {
        myCountObject[i]++;
      }
    }
    // myCountObject[i] = myCountObject[i] + 1;
  }
  return myCountObject;
};
console.log(countLetters("lighthouse in the house"));

const result = countLetters('lighthouse in the house');
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
