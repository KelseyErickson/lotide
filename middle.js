// function that return the middle most elements of an array

const middle = function(array) {
  const divideByTwo = Math.floor(array.length / 2); // To find the approximate middle of the array and round down if needed
  const middleArray = [];

  if (array.length > 2) { // If statement to return an empty array if it's length is less than 2
    if ((array.length % 2) !== 0) {
      middleArray.push(array[divideByTwo]); // Using divideByTwo to push the middle element if the array is odd
    }
    if ((array.length % 2) === 0) {
      middleArray.push(array[divideByTwo - 1]); // If array is even it returns two middle numbers using the divideByTwo value
      middleArray.push(array[divideByTwo]);
    }

  } else {
    return [];
  }

  return middleArray;
};

module.exports = middle;


