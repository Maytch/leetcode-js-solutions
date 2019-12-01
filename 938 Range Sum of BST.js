/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    
    let sum = 0;
    
    var sumNode = function(node) {
        if (!node) return;
        
        if (node.val >= L && node.val <= R) sum += node.val;
        if (node.left) sum += rangeSumBST(node.left, L, R);
        if (node.right) sum += rangeSumBST(node.right, L, R);
    }
    
    sumNode(root);
    
    return sum;
};
