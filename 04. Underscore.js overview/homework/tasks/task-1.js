/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullname of founded students to the console
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(students) {
        var filteredStudents = _.filter(students, function(student) {
            return (student.firstName).localeCompare(student.lastName) < 0;
        });
        var fullname = _.map(filteredStudents, function(student) {
            return student.firstName + ' ' + student.lastName;
        });
        fullname = _.sortBy(fullname, function(student) {
                return student;
            })
            .reverse();
        _.each(fullname, function(student) {
            console.log(student);
        });

    };
}
module.exports = solve;

var students = [{
    firstName: 'Evlogi',
    lastName: 'Minkov'
}, {
    firstName: 'Tito',
    lastName: 'Kostov'
}, {
    firstName: 'Doncho',
    lastName: 'Sneorgiev'
}];
var result = solve();
result(students);
