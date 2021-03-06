/**
 * I Want to:
 * - lower case each item in each array
 * - I want to uppercase every string beyond the first
 * - I want to concat each string into one string
 * - I want to concat each array into one long string
 * 
 * 
 * Break It Down:
 * - create a var that takes in the result
 * - create a for loop to loop over each arrays
 *      - capitalize the first string in the array
 *      - Lower case anything else !== arr[0]
 * 
 */

 const args = [["apple", "One"], ["Apple", "TWO"], ["appLe", "thRee", "FOUR"]]

const camelCase = (args) => {
    let result = "";

    for (let i = 0; i < args.length; i++) {
        let currentLine = args[i].map(word => word.toLowerCase())
        // console.log(`Console 1: ${ currentLine}`)
        for (let j = 0; j < currentLine.length; j++) {
            let firstWord = currentLine[j]
            console.log(firstWord)
            if (j !== 0) {
                let newWord = currentLine[j].charAt(0).toUpperCase() + currentLine[j].slice(1);
                
                // console.log(currentLine[0], newWord)
            }
        }
    }

    return result
};

console.log(camelCase(args))































/*
const camelCase = (...args) => {

    let result = ""
    let theArgs = args[0]
    console.log(theArgs)

    for (let i = 0; i < theArgs.length;i++){
        let arrayStr = ""
        let thisLine = theArgs[i]
        let endOfLine = thisLine.length -1

        for (let j = 0; j < thisLine.length; j++){
            let currentWord = thisLine[j].toString().toLowerCase()
            if (j !== 0){
                currentWord = currentWord[0].toUpperCase() + currentWord.slice(1)
            }
            if (j == endOfLine){
                arrayStr += currentWord + " "
            } else {
                arrayStr += currentWord
            }
        }
            (i === args.length - 1) ? result += arrayStr : result += `${arrayStr}`
        }
    return result
}



const args = [["apple", "One"], ["Apple", "TWO"], ["appLe", "thRee", "FOUR"]]

let res = "appleOne appleTwo appleThreeFour"
console.log(camelCase(args))
*/