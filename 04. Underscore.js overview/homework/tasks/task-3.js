/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(students) {
        var student =
            _.chain(students)
            .each(function(student) {
                student.mark = _.reduce(student.marks, function(memo, num) {
                    return memo + num;
                }, 0)/student.marks.length;
            })
            .sortBy(function(student) {
                return student.mark;
            })
            .last()
            .value();
        
        console.log(student.firstName + ' ' + student.lastName + ' has an average score of ' + student.mark);
    };
}

module.exports = solve;

var students = [{
    firstName: 'Evlogi',
    lastName: 'Minkov',
    age: 18,
    marks: [2, 3, 4]
}, {
    firstName: 'Tito',
    lastName: 'Kostov',
    age: 19,
    marks: [2, 4, 4]
}, {
    firstName: 'Doncho',
    lastName: 'Sneorgiev',
    age: 23,
    marks: [2, 4, 5]
}];
var result = solve();
result(students);
