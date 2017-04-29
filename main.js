"use strict";
const Book = require('./modules/InventoryManager.js');

// Book.deposit('The Little Prince', 'My favorite book');

var book = Book.getItem('ad7527b43b29a5099612996ef03931bf');

console.log(book);
