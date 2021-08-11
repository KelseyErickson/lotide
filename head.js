// Function that returns the head of an array
// Otherwise return undefined

const head = function(array) {
  if (array[0]) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;
