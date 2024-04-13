

const takeUntil = function(array, callback) {
  let resultArr = [];
  for (let item of array) {
    // console.log(item);
    if (!callback(item)) {
      resultArr.push(item);
    } else {
      return resultArr;
    }
  }
  return resultArr;
  // ...
};
module.exports = takeUntil;

