var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode; 
    }
    if (list.head === null) {
      list.head = newNode;
    }
    var lastNode = list.tail;
    lastNode.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head === null) return null;
    var headNode = list.head;
    list.head = headNode.next;
    return headNode.value;
  };

  list.contains = function(target) {
    var start = list.head;
    while(start !== null) {
      if (start.value === target) {
        return true;
      }
      start = start.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
