var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);  
  return newTree;
};

var treeMethods = {};
var myTree = Tree();
console.log(myTree);

treeMethods.addChild = function(value) {
  //create subtree 
  var subTree = new Tree(value);
  console.log(this.children);
  //push the subTree into Tree's children container
  this.children.push(subTree);
  console.log("line 17 " + this.children);
};

treeMethods.contains = function(target) {
  //check if parent value is target
  if (this.value === target) {
    return true;
  } else {
    //check if doesn't exist the children
    if (this.children !== null) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};
console.log("hello");
var myTree = Tree(1);
myTree.addChild(5);



/*
 * Complexity: What is the time complexity of the above functions?
 */
