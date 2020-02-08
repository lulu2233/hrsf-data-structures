

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    var bucket = {};
    bucket[k] = v;
    this._storage[index] = bucket;
  } else {
    this._storage[index][k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  } else {
    return this._storage[index][k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  } else {
    var bucket = this._storage[index];
    delete bucket[k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


