'use strict'
const express = require('express');
const router = express.Router();
const app = require('../app') // this

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs')  // the index.ejs file uses local vars for the title and desc that it gets from app.js app.locals, so you don't need to pass in the object containing them here. index.ejs accesses these vars directly... you don't need app.locals.desc for example.
});

module.exports = router;

