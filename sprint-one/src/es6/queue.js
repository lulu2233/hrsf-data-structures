class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.enqPos = 0;
    this.deqPos = 0;
    this.storage = {};
  }
  enqueue(value) {
    this.storage[this.enqPos++] = value;
  };

  dequeue() {
    if (this.deqPos >= this.enqPos) {
      return null;
    }
    var deqVal = this.storage[this.deqPos++];
    delete this.storage[this.deqPos - 1];
    return deqVal;
  };

  size() {
    return this.enqPos - this.deqPos;
  }

}
