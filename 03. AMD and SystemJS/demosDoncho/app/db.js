const KEY = 'ITEMS-KEY',
    KEY_ID = 'ID-KEY';
var lastId = +(localStorage.getItem(KEY_ID) || 0);

import 'app/polyfills/array.js';

function add(obj) {
    var items = JSON.parse(localStorage.getItem(KEY) || '[]');
    obj.id = lastId += 1;
    localStorage.setItem(KEY_ID, lastId);
    items.push(obj);
    localStorage.setItem(KEY, JSON.stringify(items));
    return this;
}

function all() {
    var items = JSON.parse(localStorage.getItem(KEY) || '[]');
    return items;
}

function byId(id) {
    var items = JSON.parse(localStorage.getItem(KEY) || '[]');
    var item = items.find(function(item) {

        return item.id === id;
    });
    return item;
}

export {
    add, all, byId
};
export default {
    add, all, byId
};
