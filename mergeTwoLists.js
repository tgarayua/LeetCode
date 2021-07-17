/** PROBLEM 
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

** PSEUDO CODE **

Understanding The Problem
- we want to take two arrays and combin them into a sorted array
- we have two arrays with diffrent integers in acending order
- we want to have that array push the integers into a single array with out replacing duplicate integers
- the output can be determined from the input

Explore Examples

- Example 1
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

- Example 2
Input: l1 = [], l2 = [0]
Output: [0]

Break It Down
- We want to splice together the nodes of the frist two list to create a new list

 */

let l1 = [1,2,4] 
let l2 = [1,3,4]

var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2;
    
    if (!l2)
        return l1;
    
    let list = new ListNode();
    let pointer = list;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            list.next = l1;
            l1 = l1.next
        } else {
            list.next = l2;
            l2 = l2.next;
        }
        
        list = list.next;
    }
    
    list.next = l1 || l2;
    
    return pointer.next;
};


console.log(mergeTwoLists(l1,l2));