"use strict";
const low = require('lowdb');
const db = low('./database/db.json');
const uniqueString = require('unique-string');

var InventoryManager = function () {};

InventoryManager.prototype.deposit = function (name, description) {
  var key = uniqueString();
  var value = {
    'name': name,
    'description': description,
    'date_of_deposit': new Date()
  };
  db.set(key, value).write();
  return value;
};

InventoryManager.prototype.getItems = function () {
  return db.read();
};

InventoryManager.prototype.getItem = function (uid) {
  return db.get(uid).value();
};

module.exports = new InventoryManager();
