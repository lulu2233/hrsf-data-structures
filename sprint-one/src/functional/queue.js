var Queue = function() {
  var enqPos = 0;
  var deqPos = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqPos++] = value;
  };

  someInstance.dequeue = function() {
    if (deqPos >= enqPos) return null;
    var deqVal = storage[deqPos++];
    delete storage[deqPos - 1];
    return deqVal;
  };

  someInstance.size = function() {
    console.log("length of the queue " + (enqPos - deqPos));
    return enqPos - deqPos;
  };

  return someInstance;
};
