// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
//        2
//       / \
//     1    3
// Input: root = [2,1,3]
// Output: true

// Example 2:
//          5
//        /   \
//       1     4
//            / \
//           3   6
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 10^4].
// -231 <= Node.val <= 231 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
  constructor(val) {
    this.val = val === null ? null : val;
    this.left = null;
    this.right = null;
  }
}
const isValidBST = function (root) {
  //checking a node, the items to left are smaller, items to right are higher
  // root = [2,1,3]
  //root[0] -> root[1] left, root[2] right
  // x - children are at 2 * x +1 and 2 * x + 2
  //root = [5,1,4,null,null,3,6]
  //root[2] -> left=root[4+1], right=root[4+2];
  // If I am going for a node, check if all el from left subtree are smaller

  const lengthRoot = root.length;
};

const createBT = function (root) {
  //to create the BT, you need to traverse the root array, based on the index
  //of the el in the array, you assign it to a parent node

  //creating the root node 1st:

  const rootNode = new TreeNode(root[0]);

  if (rootNode.val === null) return rootNode; //1st el of array being null means
  //the array is empty and we return an empty BST

  let currentNode = rootNode;

  for (let i = 0; i < root.length; i++) {
    //now, based on the current index i, you look in the array and decide if you
    //will put any children under current node
    let valLeftChild = root[2 * i + 1];
    let valRightChild = root[2 * i + 2];

    if (!isNaN(valLeftChild)) currentNode.left = new TreeNode(valLeftChild);
    if (!isNaN(valRightChild)) currentNode.right = new TreeNode(valRightChild);
  }
};
