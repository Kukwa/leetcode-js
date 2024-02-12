/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
    let index = 0
    let prefix = []
    while(true){
        if(index >= strs[0].length)
            return prefix.join("")
        const letter = strs[0][index]
        
        for (const word of strs) {
            if (word[index] !== letter){
                return prefix.join("")
            }
        }
        index+=1
        prefix.push(letter)
    }

};