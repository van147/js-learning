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