const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (let letters of sentence) {
    if (letters !== " ") {
      if (results[letters] === undefined) {
        results[letters] = [position];
      } else {
        results[letters].push(position);
      }
    }
    position++;
  }
  return results;
};

module.exports = letterPositions;