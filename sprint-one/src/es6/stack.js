class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  };

  push(value) {
    this.storage[++this.count] = value;
  };

  pop() {
    if (this.count === 0) {
      return null;
    }
    var popVal = this.storage[this.count--];
    delete this.storage[this.count + 1];
    return popVal;
  };

  size() {
    return this.count;
  }


}