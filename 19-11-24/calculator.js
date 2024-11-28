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