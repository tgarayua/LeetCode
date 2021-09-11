
const isSubsequence = (str1, str2) => {
    console.log(`-> Inputs <-`);
    console.log(`str1:`, str1, `str2:`, str2);

    let first = 0;
    let last = str1.length - 1;
    
    for (let i = 0; i < str2.length; i++) {
        let currentCharStr2 = str2[i];
        let currentCharStr1 = str1[first];
        let lastCharOfStr1 = str1[last];
        console.log(`index:`, i, `currentCharStr2:`, currentCharStr2, `currentCharStr1:`, currentCharStr1, `lastCharOfStr1:`, lastCharOfStr1);
        
        if (currentCharStr2 === str1[first]) {
            first++;
        } else if (currentCharStr1 === str1[last] && currentCharStr2 === ) {
            console.log(`-> if 2: Hit! <-`);
            return true;
        }

    }




    return `end!`
}

console.log(isSubsequence("sing", "sting"))