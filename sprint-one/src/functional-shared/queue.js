var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.enqPos = 0;
  someInstance.deqPos = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.enqPos++] = value;
  },
  dequeue : function() {
    if (this.deqPos >= this.enqPos) return null;
    var deqVal = this.storage[this.deqPos++];
    delete this.storage[this.deqPos - 1];
    return deqVal;
  },

  size : function() {
    return this.enqPos - this.deqPos;
  } 
};


