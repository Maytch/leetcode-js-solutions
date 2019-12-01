/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    if (!root) return;
    
    const sumTree = ((node) => {
        if (node.right) sumTree(node.right);
        sum += node.val;
        
        node.val = sum;
        
        if (node.left) sumTree(node.left);
    });
    
    sumTree(root);
    return root;
};
