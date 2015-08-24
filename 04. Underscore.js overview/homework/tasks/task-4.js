/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **groups** the animals by `species`
    *   the groups are sorted by `species` descending
*   **sorts** them ascending by `legsCount`
    *   if two animals have the same number of legs sort them by name
*   **prints** them to the console in the format:

```
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    GROUP_1_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in group 1
    NAME has LEGS_COUNT legs //for the second animal in group 1
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    GROUP_2_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in the group 2
    NAME has LEGS_COUNT legs //for the second animal in the group 2
    NAME has LEGS_COUNT legs //for the third animal in the group 2
    NAME has LEGS_COUNT legs //for the fourth animal in the group 2
```
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(animals) {
        var groupedObj =
            _.chain(animals)
            .sortBy(function(animal) {
                return [animal.legsCount, animal.name];
            })
            .groupBy(function(animal) {
                return animal.species;
            })
            .value();

        String.prototype.repeat = function(argument) {
            return new Array(argument + 1).join(this);
        }

        var keys = _.keys(groupedObj);
        keys = _.sortBy(keys, function(key) {
            return key;
        });
        
        for (var i = keys.length - 1; i >= 0; i--) {
            console.log('-'.repeat(keys[i].length + 1));
            console.log(keys[i] + ':');
            console.log('-'.repeat(keys[i].length + 1));
            var currentGroupe = groupedObj[keys[i]];
            for (var j = 0; j < currentGroupe.length; j++) {
                console.log(currentGroupe[j].name + ' has ' + currentGroupe[j].legsCount + ' legs');

            };
        };
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