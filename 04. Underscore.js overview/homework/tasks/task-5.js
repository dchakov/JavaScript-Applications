/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(animals) {
        var numberOfLegs = _.reduce(animals, function(memo, animal) {
            return memo + animal.legsCount;
        }, 0);
        console.log("Total number of legs: " + numberOfLegs);
    };
}

module.exports = solve;

var animals = [{
    name: 'tiger',
    species: 'cats',
    legsCount: 4
}, {
    name: 'lion',
    species: 'cats',
    legsCount: 3
}, {
    name: 'eagle',
    species: 'birds',
    legsCount: 2
}, {
    name: 'eagle1',
    species: 'birds',
    legsCount: 1
}, {
    name: 'puma',
    species: 'cats',
    legsCount: 4
}];
var result = solve();
result(animals);
