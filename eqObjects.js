
const eqArrays = require('./eqArrays');
const eqObjects = function(obj1, obj2) {
  let setResult = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        setResult = eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return setResult;
};
module.exports = eqObjects;