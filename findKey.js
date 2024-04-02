const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
const findKey = function(obj, callback) {
  for (let item in obj) {
    let value = obj[item];
    // console.log(value);
    if (callback(value)) {
      return item;
    }
  }
};
const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);
console.log(result1); // => "noma"
assertEqual(result1, "noma");
