/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
    *   if there is more than one author print them all sorted in ascending order by fullname
        *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/
if (typeof require !== 'undefined') {
    _ = require('underscore');
}

function solve() {
    return function(books) {
        var bookByAuthor =
            _.chain(books)
            .map(function(book) {
                book.authorFullName = book.author.firstName + ' ' + book.author.lastName;
                return book;
            })
            .groupBy(function(book) {
                return book.authorFullName;
            })
            .value();

        var pairs = _.pairs(bookByAuthor);

        pairs = _.chain(pairs)
            .each(function(pair) {
                pair[1] = pair[1].length;
            })
            .sortBy(function(pair) {
                return pair[1];
            })
            .value();


        _.chain(pairs)
            .filter(function(pair) {
                return pair[1] === _.last(pairs)[1];
            })
            .sortBy(function(pair) {
                return pair[0];
            })
            .each(function(pair) {
                console.log(pair[0]);
            })
            .value();
    };
}

module.exports = solve;

var books = [{
    title: 'tiger',
    author: {
        firstName: "Ivan",
        lastName: "Vazov"
    }
}, {
    title: 'lion',
    author: {
        firstName: "Jordan",
        lastName: "Jovkov"
    }
}, {
    title: 'eagle',
    author: {
        firstName: "Elin",
        lastName: "Pelin"
    }
}, {
    title: 'eagles',
    author: {
        firstName: "Elin",
        lastName: "Pelin"
    }
}, {
    title: 'puma',
    author: {
        firstName: "Ivan",
        lastName: "Vazov"
    }
}];

var result = solve();
result(books);
