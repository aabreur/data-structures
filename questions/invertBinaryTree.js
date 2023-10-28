class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Function to invert a binary tree
  function invertTree(root) {
    if (root === null) {
      return null;
    }
  
    // Swap the left and right subtrees recursively
    const left = invertTree(root.left);
    const right = invertTree(root.right);
  
    root.left = right;
    root.right = left;
  
    return root;
  }
  
  // Function to print the binary tree (for debugging purposes)
  function printTree(root) {
    if (root === null) {
      return;
    }
  
    console.log(root.val);
    printTree(root.left);
    printTree(root.right);
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  console.log("Original Tree:");
  printTree(root);
  
  const invertedRoot = invertTree(root);
  
  console.log("Inverted Tree:");
  printTree(invertedRoot);