var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enqPos = 0;
  this.deqPos = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enqPos++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.deqPos >= this.enqPos) return null;
  var deqVal = this.storage[this.deqPos++];
  delete this.storage[this.deqPos - 1];
  return deqVal;
};

Queue.prototype.size = function() {
  return this.enqPos - this.deqPos;
};


