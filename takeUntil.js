// Function will take in two parameters - an array and a callback function
// Return a slice of the array with elements taken from the beginning and will continue until the callback returns a truthy value


const takeUntil = function(array, callback) {
  let results = [];
  for (element of array){
    if (callback(element)) {
      results = array.slice(0, array.indexOf(element));
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
