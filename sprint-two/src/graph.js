// Instantiate a new graph
var Graph = function() {
  //create vertices to collect all the vertice
  this.graph = {};
  //create edges to collect all the edge
  
};

//create a datasctructure to store node
var vertices = function(node) {
  var vertex = {};
  vertex.value = node;
  vertex.neighbors = [];
  return vertex;
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newVertex = vertices(node);
  this.graph[node] = newVertex; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check every node in graph
  //check the node's value if is node
  for (var key in this.graph) {
    if (this.graph[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remvoe the node if the node is exist
  var deleteNode = this.graph[node];
  //when we remove the node, we should remove all the edges link to it
  if (deleteNode) {
    for (var i = 0; i < deleteNode.neighbors.length; i++) {
      this.removeEdge(node, deleteNode.neighbors[i]);
    }
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if there is neighbor of the fromNode is toNode.
  var myNeighbours = this.graph[fromNode].neighbors;
  console.log(myNeighbours);
  for (var i = 0; i < myNeighbours.length; i++) {
    if (myNeighbours[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].neighbors.push(toNode);
  this.graph[toNode].neighbors.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //create a helper function to remove the target from array
  var helper = function(array, target) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        array.splice(i, 1);
      }
    }
  }
  helper(this.graph[fromNode].neighbors, toNode);
  helper(this.graph[toNode].neighbors, fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(key, this.graph[key]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


