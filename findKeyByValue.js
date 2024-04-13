const findKeyByValue = function(objectToScan, keyToFind) {
  for (let keys in objectToScan) {
    if (objectToScan[keys] === keyToFind) {
      return keys;
    }
  }
};
module.exports = findKeyByValue;