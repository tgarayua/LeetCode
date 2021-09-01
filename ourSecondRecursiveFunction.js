let num = 10

const sumRange = (num) => {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(num));