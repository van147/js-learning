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