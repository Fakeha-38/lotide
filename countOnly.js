const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //define a new object to be returned
  let myCounter = {};
  //loop through the itemsToCount to see weather a ey is true or false
  for (let key in itemsToCount) {
    if (itemsToCount.hasOwnProperty(key)) {
      if (itemsToCount[key]) {
        let count = 0;
        // console.log(`Item exist in itemsToCount`);
        //for keys that are true iterate through the array and return the counter for a particular elemnet in the new object
        for (let el of allItems) {
          // console.log(`Loop of the array`);
          if (el === key) {
            console.log(`The ${key} exist in the array as ${el}`);
            count++;
            // console.log(count, el);
            myCounter[el] = count;
          }
        }
      // myCounter[] = count;
      }
    }
  }
  // console.log(myCounter);
  //return the new object
  return myCounter;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
