let num = 10;

// :::::::: count down function using recursion ::::::::
// const countDown = (num) => {

//     // if number reaches 0 console.log "All done!"
//     if (num <= 0) {
//         return "All done!"
//     }

//     // console log the current num, decriment the number by 1, run the countdown function with the decrimented number
//     // Example:
//     // console.log(10); then num--; then countDown(9);
//     console.log(num);
//     num--;
//     countDown(num);
// }

// :::::::: count down function using iteration ::::::::
// const countDown = (num) => {

//     // for loop with index set to the num, if the index is greater than zero, decrement i
//     // for loop that counts down from the number
//     for (let i = num; i > 0; i--) {
//         console.log(i)
//     }
//     return "All done!";
// }

console.log(countDown(num))

