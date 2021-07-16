/* 
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
*/

let l1 = [1,2,4]
let l2 = [1,3,4]

const mergeTwoList = () => {
    let splicedArray = l1.splice(1,0, l2)


    console.log(l1.val)
};

mergeTwoList(l1, l2);