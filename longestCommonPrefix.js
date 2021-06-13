/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".*/

let strings = ["flower","flow", "flight", "fight"]

const longestCommonPrefix = (strings) => {
    let prefix = ""
    if (strings === null || strings.length === 0) return prefix

    for (let i = 0; i < strings[0].length; i++) {
        const char = strings[0][i]

        for (let j = 1; j < strings.length; j++) {
            if(strings[j][i] !== char) return prefix
        };
        prefix = prefix + char
    };
    return prefix
};

console.log(longestCommonPrefix(strings));