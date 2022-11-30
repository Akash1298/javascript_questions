// Find number of times a character repeats in a string!

const string = "abbcaassavba";
const char = "b";

function checkCharacter (str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === char){
      count++;
    }
  }
  return count;
}

console.log(checkCharacter(string, char));