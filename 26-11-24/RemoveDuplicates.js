/*
Problem 2: Remove Duplicates
Given an array [1, 2, 2, 3, 4, 4, 5]:
Write a program to create a new array where duplicate elements are removed.
The result should be [1, 2, 3, 4, 5].
*/

let numb = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    let uniqueArray = []; 
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let uniqueNumbers = removeDuplicates(numb);

console.log(uniqueNumbers);