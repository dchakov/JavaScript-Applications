/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName`, `lastName` and `age` properties
*   **finds** the students whose age is between 18 and 24
*   **prints**  the fullname of found students, sorted lexicographically ascending
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(students) {
        _.chain(students)
            .filter(function(student) {
                return 18 <= student.age && student.age <= 24;
            })
            .map(function(student) {
                return student.firstName + ' ' + student.lastName;
            })
            .sortBy(function(student) {
                return student;
            })
            .each(function(student) {
                console.log(student);
            });
    };
}

module.exports = solve;

var students = [{
    firstName: 'Evlogi',
    lastName: 'Minkov',
    age: 18
}, {
    firstName: 'Tito',
    lastName: 'Kostov',
    age: 19
}, {
    firstName: 'Doncho',
    lastName: 'Sneorgiev',
    age: 23
}];
var result = solve();
result(students);
