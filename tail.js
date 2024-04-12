let tailArr = [];
const tail = function(arr) {
  tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail;