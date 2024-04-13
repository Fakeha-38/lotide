// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //define a new object to be returned
  let myCounter = {};
  //loop through the itemsToCount to see weather a key is true or false
  for (let key in itemsToCount) {
      if (itemsToCount[key]) {
        let count = 0;
        for (let el of allItems) {
          if (el === key) {
            count++;
            myCounter[el] = count;
          }
        }
      }
  }
  //return the new object
  return myCounter;
};

module.exports = countOnly;