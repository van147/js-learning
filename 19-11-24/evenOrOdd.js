/*
Write a program that takes a number as input and checks if it is even or odd:

- If the number is even, print 'The number is even.'
- If the number is odd, print 'The number is odd.'
Use and learn modulo operator %
*/
var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert("The number is even.");
} else {
   alert("The number is odd.");
}