
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
      var rightTree = BinarySearchTree(value);
    } else {
      var rightTree = this.right.insert(value);
    }
    this.right = rightTree;
  } else {
    if (this.left === null) {
      var leftTree = BinarySearchTree(value);
    } else {
      var leftTree = this.left.insert(value);
    }
    this.left = leftTree;
  }
  return this;
  },

  contains : function(value) {
    //check if the most top node's value is value
    //if yes return true
    if (this === null) {
      return false;
    }
    if (this.value === value) {
      return true;
    }
    //if no continue check it's chidren's value 
    return this.right.contains(value) || this.left.contains(value);
    //until one node's value is value or all the node have been checked 

  },

  depthFirstLog : function(callback) {

  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
