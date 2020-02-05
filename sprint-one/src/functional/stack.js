var Stack = function() {
  var count = 0;
  var someInstance = {

  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++count] = value;  
  };

  someInstance.pop = function() {
    if (count === 0) {
      return null;
    }
    var popVal = storage[count--];
    delete storage[count + 1];
    return popVal;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
