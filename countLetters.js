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
  }
  return myCountObject;
};
module.exports = countLetters;
