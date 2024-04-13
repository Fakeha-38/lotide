const findKey = function(obj, callback) {
  for (let item in obj) {
    let value = obj[item];
    // console.log(value);
    if (callback(value)) {
      return item;
    }
  }
};

module.exports =findKey;
// console.log(result1); // => "noma"
// assertEqual(result1, "noma");
