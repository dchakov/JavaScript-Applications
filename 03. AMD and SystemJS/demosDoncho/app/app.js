//imports

import 'bower_components/jquery/dist/jquery.js';
import Handlebars from 'bower_components/handlebars/handlebars.js';

import db from 'app/db.js';

//app.js depends jquery
//app.js depends handlebars
//app.js depends app/db.js

var templateString = '<li><strong>Item - {{this}}</stron></li>';
var template = Handlebars.compile(templateString);

function add () {
	console.log('ADDD');
}

db.add({name:'John'});
console.log(db.all());
console.log(db.byId(2));

function render(items) {
    var $list = $('<ul/>');
    items.map(template)
        .forEach(function(listItem) {
            $list.append(listItem);
        })
    return $list;
}
export {render};