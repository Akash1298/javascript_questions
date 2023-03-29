// Given a string, the task is to reverse the order of the words in the given string.

// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 

let string = "i love programming very much"

const reverseString = (string) => {
    let str = string.split(" ").reverse().join(" ")
    return str;
}

console.log(reverseString(string));