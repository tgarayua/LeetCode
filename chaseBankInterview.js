 queries =
["APPEND","Hey"], 
 ["APPEND"," you"], 
 ["APPEND",", don't"], 
 ["APPEND"," "], 
 ["APPEND","let me down"]

Output:

null

function textEditor1_2(queries) {
    let result = ""
    
    for(let i = 0; i < queries.length; i++) {
        currentQuery = queries[i]

        console.log(queries[i])
    }

    console.log(result)
    return result
}

textEditor1_2(queries)