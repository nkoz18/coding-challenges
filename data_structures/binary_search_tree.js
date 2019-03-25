// Can only have two branches for every node
// Are ordered -
// Each left sub-tree is less than or equal to the parent node
// Each right sub-tree is greater than or equal to the parent node
// Binary search allows operations to skip half the tree
// Each lookup, insert, or delete takes time proportional to the log of n


class Node { // Node class for each node in the tree

  constructor(data, left = null, right = null){
    this.data = data; // what we want to store
    this.left = left; // point to the left node
    this.right = right;   // point to the right node
  }

}

class BST {

  constructor(){
    this.root = null; // Creates the root node
  }

  add(data){
    const node = this.root; // get a reference to the root node
    if(node === null){
      this.root = new Node(data); // if its the first one add the data to the root node
      return;
    } else {
      const searchTree = function(node){ // recursive function to find where the new node should go in the tree
        if(data < node.data){
          if(node.left === null){
            node.left = new Node(data);
            return;
          }else if( node.left !== null) {
            return searchTree(node.left); // conitinue searching by calling the function recursively
          }
        } else if (data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          } else if (node.right !== null){
            return searchTree(node.right);
          }
        }else{
          return null; // If they are equal do not add the data to the tree
        }
      };
      return searchTree(node);
    }
  }

  findMin(){
    let current = this.root;
    while(current.left !== null){
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    return current.data;
  }

  find(data){
    let current = this.root;
    while(current.data !== data){
      if(data < current.data){
        current = current.left;
      }else{
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;
  }

  isPresent(data){
    let current = this.root;
    while(current){ // while current is not null
      if(data === current.data){
        return true;
      }
      if(data < current.data){
        current = current.left;
      }else{
        current = current.right
      }
    }
    return false;
  }

  remove(data){

    const removeNode = function(node, data){
      if(node == null) { // Is it an empty tree?
        return null;
      }

      if(data == node.data){

        // node has no children
        if(node.left == null && node.right == null){
          return null;
        }

        // node has no left child
        if(node.left == null){
          return node.right;
        }

        // node has no right child
        if(node.right == null){
          return node.left;
        }

        // node has two children
        var tempNode = node.right; // Go to the right of the node we are going to delete
        while(tempNode.left !== null){ // Then go as far as possible down the left side
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }else if (data < node.data){

        node.left = removeNode(node.left, data);
        return node;

      }else{

        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data); // Assign this.root to what is returned by the function
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root){

    if(node == null){
      return -1;
    };

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if(left < right ){
      return left + 1;
    }else {
      return right + 1;
    };

  }


  findMaxHeight(node = this.root){
    if(node == null){
      return -1;
    };

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if(left > right ){
      return left + 1;
    }else {
      return right + 1;
    };
  }

  inOrder(){
    if(this.root == null){
      return null;
    }else{
      var result = new Array();
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left); // Short Circuit Eval - If the first thing is true, run the second command, otherwise do not
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }

  preOrder(){
    if(this.root == null){
      return null;
    }else{
      var result = new Array();
      function traversePreOrder(node){
        result.push(node.data);
        node.left && traversePreOrder(node.left); // Short Circuit Eval - If the first thing is true, run the second command, otherwise do not
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    };
  }

  postOrder(){
    if(this.root == null){
      return null;
    }else{
      var result = new Array();
      function traversePostOrder(node){
        node.left && traversePostOrder(node.left); // Short Circuit Eval - If the first thing is true, run the second command, otherwise do not
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    };
  }

  levelOrder(){
    let result = [];
    let Q = [];

    if(this.root != null){
      Q.push(this.root);
      while(Q.length > 0){
        let node = Q.shift();
        result.push(node.data);
        if(node.left != null){
          Q.push(node.left);
        };
        if(node.right != null){
          Q.push(node.right);
        };
      };
      return result;
    }else{
      return null;
    }
  }

}


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log('inOrder: ' + bst.inOrder());  // Depth first search
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder()); // Bredth First Search - explores all node at the same level until going on to the next
