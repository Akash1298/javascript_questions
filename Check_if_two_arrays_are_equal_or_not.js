// Given two arrays A and B of equal size N, 
// the task is to find if given arrays are equal or not. 
// Two arrays are said to be equal if both of them contain same set of elements, 
// arrangements (or permutation) of elements may be different though.

let a = [1,2,5,4,0]
let b = [2,4,5,0,1]

function check (a, b) {
  if (a.length != b.length) return false
  a.sort();
  b.sort();
  for(let i = 0; i < a.length; i++)
    if(a[i] != b[i]) return false;

    return true;
}

console.log(check(a, b));