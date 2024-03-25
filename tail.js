const assertEqual = function (actual, expected) {
  if(actual === expected){
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
      console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};
let tailArr = [];
const tail = function(arr){
  for (let i = 1; i < arr.length; i++){
    tailArr.push(arr[i]);
  }
  return tailArr;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ['Lighthouse', 'Labs']); // => will always fail!
