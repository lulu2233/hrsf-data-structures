var BinarySearchTree = function(value) {
  var BSNode = {};
  BSNode.value = value;
  BSNode.left = null;
  BSNode.right = null;
  _.extend(BSNode, bstreeMethods);
  return BSNode;
};

var bstreeMethods = {
  insert : function(value) {
    console.log("line13: " + this);
  
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  
  },

  contains : function(value) {
    //check if the most top node's value is value
    //if yes return true
    if (this.value === value) {
      return true;
    } else { //if no continue check it's chidren's value 
    //until one node's value is value or all the node have been checked 
      if (this.right === null && this.left === null) {
        return false;
      } else if (this.right === null && this.left !== null) {
        return this.left.contains(value);
      } else if (this.left === null && this.right !== null) {
        return this.right.contains(value);
      } else {
          return this.right.contains(value) || this.left.contains(value);
      }
    }
  },

  depthFirstLog : function(callback) {
    var root = this;
    callback(root.value);
    if (root.left !== null) {
      root.left.depthFirstLog(callback);
    }
    if(root.right !== null) {
      root.right.depthFirstLog(callback);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
