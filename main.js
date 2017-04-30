"use strict";
const Book = require('./modules/InventoryManager.js');
var express = require('express');
var app = express();
const basePath = '/v1/inventory';

app.get(basePath + '/deposit', function (req, res) {
  res.send(Book.deposit(req.query.name, req.query.description));
})

app.listen(3000)
