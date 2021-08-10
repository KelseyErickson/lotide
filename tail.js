const assertEqual = require('./assertEqual');

// Function to return the tail of an array (every element except the head)

const tail = function(array) {
  const newArray = [];
  for (let element of array) {
    if (element !== array[0]) {
      newArray.push(element);
    }
  }

  return newArray;
};

module.exports = tail;