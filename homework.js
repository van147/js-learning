
/*
Write a program that takes the user's score and prints the corresponding grade based on the following rules:
- 90-100 = 'A'
- 80-89 = 'B'
- 70-79 = 'C'
- 60-69 = 'D'
- 0-59 = 'F'
- Goal
- Use multiple if-else if statements.
*/
var score = +prompt("Enter your score (0-100):");

if (score >= 90 && score <= 100) {
   alert("Your grade is: A");
} else if (score >= 80 && score <= 89) {
    alert("Your grade is: B");
} else if (score >= 70 && score <= 79) {
    alert("Your grade is: C");
} else if (score >= 60 && score <= 69) {
    alert("Your grade is: D");
} else if (score >= 0 && score <= 59) {
    alert("Your grade is: F");
} else {
    alert("Invalid score. Please enter a score between 0 and 100.");
}


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


/*
Month Check
Write a program that takes the number of a month (1-12) and prints which season it belongs to:
- 12, 1, 2 -> 'Winter'
- 3, 4, 5 -> 'Spring'
- 6, 7, 8 -> 'Summer'
- 9, 10, 11 -> 'Autumn'
*/
var month = +prompt("Enter the month number (1-12):");

if (month === 12 || month === 1 || month === 2) {
   alert("Winter");
} else if (month === 3 || month === 4 || month === 5) {
    alert("Spring");
} else if (month === 6 || month === 7 || month === 8) {
    alert("Summer");
} else if (month === 9 || month === 10 || month === 11) {
    alert("Autumn");
} else {
    alert("Invalid month number. Please enter a number between 1 and 12.");
}


/*
Day Translation
Create a program that uses a switch-case to translate a day of the week from English to Armenian.
 The user should input the name of the day in English, and the program should return the corresponding Armenian name.

Input: 'Monday'
Output: 'Երկուշաբթի'
*/
var day = prompt("Enter the day of the week (e.g., Monday):").toLowerCase();

switch (day) {
    case "monday":
       alert("Երկուշաբթի");
        break;
    case "tuesday":
        alert("Երեքշաբթի");
        break;
    case "wednesday":
        alert("Չորեքշաբթի");
        break;
    case "thursday":
        alert("Հինգշաբթի");
        break;
    case "friday":
        alert("Ուրբաթ");
        break;
    case "saturday":
        alert("Շաբաթ");
        break;
    case "sunday":
        alert("Կիրակի");
        break;
    default:
        alert("Invalid day. Please enter a valid day of the week.");
}


/*
Calculator
The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
Input: 5, 3, "+"Output: 8
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
*/
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");

switch (operation) {
    case "+":
        adadsdasd
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            alert(num1 / num2);
        } else {
            alert("Cannot divide by zero.");
        }
        break;
    default:
        alert("Invalid operation.");
}