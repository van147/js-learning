/*
Problem 1: Student Grades
Description:
You are provided with an array of students, where each student is represented as an object.
Each object contains the student’s name and their score.
Your task is to determine the grade status of each student using a for loop and a switch statement.
The grade categories are as follows:

- >= 90 → “Excellent”
- >= 75 → “Good”
- >= 50 → “Pass”
- default → “Fail”

Data example
const students = [
  { name: "Anna", grade: 85 },
  { name: "Mariam", grade: 92 },
  { name: "Olivia", grade: 76 },
  { name: "Emma", grade: 59 },
];
*/

const students = [
    { name: 'Anna', grade: 85 },
    { name: 'Mariam', grade: 92 },
    { name: 'Olivia', grade: 76 },
    { name: 'Emma', grade: 59 },
  ];
  
  students.forEach(student => {
    let grade;
    switch (true) {
      case (student.grade >= 90):
        grade = 'Excellent';
        break;
      case (student.grade >= 75):
        grade = 'Good';
        break;
      case (student.grade >= 50):
        grade = 'Pass';
        break;
      default:
        gradeCategory = 'Fail';
    }
    console.log(`${student.name}: ${grade}`);
  });
  