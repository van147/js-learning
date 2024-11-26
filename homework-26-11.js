/*
Problem 1: Sum of Elements
Given an array of numbers [1, 2, 3, 4, 5, 6]:
Write a program to find the sum of all the elements in the array using only a for loop and the array.
*/

let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

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



/*
Problem 3: Longest Text
Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
Write a program to find the longest word in the array.
Solution in JavaScript using only for loop and arrays:
*/

let words = ['React', 'JavaScript', 'Redux', 'PHP', 'C#'];

function findLongestWord(arr) {
    let longestWord = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

let longest = findLongestWord(words);

console.log(longest);