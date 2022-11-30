// Sort an array in descending order without using predefined functions of js

const array = [1, 2, 7, 4, 3, 4, 2, 8, 6, 9];

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray(array));