const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const middle = function (arr) {
  let middArray = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return (middArray = []);
  } else {
    let middIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      middArray.push(arr[middIndex - 1], arr[middIndex]);
      return middArray;
    } else {
      middArray.push(arr[middIndex]);
      return middArray;
    }
  }
};


module.exports = middle;
