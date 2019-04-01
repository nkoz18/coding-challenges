/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 *
 * }
 *     Given a binary tree, find its maximum depth.
 *     The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  function getDepth(node){
    if(node == null){
      return -1;
    };

    let left = getDepth(node.left);
    let right = getDepth(node.right);

    if(left > right ){
      return left + 1;
    }else {
      return right + 1;
    };
  }

  return getDepth(root) + 1;  

};
