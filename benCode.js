console.time('bensCode.js')
const areThereDups = (nums) => {
    
    let firstPointer = 0
    let secondPointer = 1
    let lengthOfLoop = nums.length -1
    
    while (firstPointer < lengthOfLoop) {
        let firstNum = nums[firstPointer]
        let secondNum = nums[secondPointer]
        console.log(`hit! top level of while loop ------>`,`firstPointer:`, firstPointer, `secondPointer:`, secondPointer, `firstNum:`, firstNum, `secondNum:`, secondNum)
        if (firstNum === secondNum) {
            console.log('hit! if (firstNum === secondNum)')
            return true
        } else if (firstNum !== secondNum && secondPointer < lengthOfLoop){
            console.log('hit! else if (firstNum !== secondNum && secondPointer <= lengthOfLoop)')
            secondPointer ++
            console.log(`else if after secondPointer ++  --->`,`firstPointer:`, firstPointer, `secondPointer:`, secondPointer)
            console.log(` `)
        } else {
            console.log('hit! else')
            //secondPointer ++ 
            firstPointer ++
            secondPointer = firstPointer + 1
            console.log(`else after firstPointer ++  ------->`,`firstPointer:`, firstPointer, `secondPointer:`, secondPointer, `firstNum:`, firstNum, `secondNum:`, secondNum)
            console.log(` `)
        }
    }
    return false
}
const nums = ['a','d','a','c','b','e','f','g','h','i','j','k','l','m','n','o','p','q','r','x','y','z','y']
console.log(areThereDups(nums))
console.timeEnd('bensCode.js')