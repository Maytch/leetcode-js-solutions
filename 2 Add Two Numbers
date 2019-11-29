/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Current = l1;
    let l2Current = l2;
    
    let l3 = null;
    let l3Current = null;
    let remainder = 0;
    
    while (true) {
        const l1CurrentVal = l1Current ? l1Current.val : 0;
        const l2CurrentVal = l2Current ? l2Current.val : 0;
        
        let l3CurrentVal = l1CurrentVal + l2CurrentVal;
        
        if (remainder) {
            l3CurrentVal++;
            remainder = 0;
        }
        
        if (l3CurrentVal >= 10) {
            l3CurrentVal -= 10;
            remainder = 1;
        }
        
        let result = new ListNode(l3CurrentVal);
        
        if (!l3) {
            l3 = result;
            l3Current = l3;
        } else {
            l3Current.next = result;
            l3Current = l3Current.next;
        }
        
        l1Current = l1Current ? l1Current.next : null;
        l2Current = l2Current ? l2Current.next : null;
        
        if (l1Current === null && l2Current === null) {
            if (remainder) l3Current.next = new ListNode(1);
            return l3;
        }
    }
};
