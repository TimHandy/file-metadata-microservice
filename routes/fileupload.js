'use strict'
const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')

// POST route /fileupload
const upload = multer({ dest: 'uploads/' })
router.post('/', upload.single('file'), function(req, res, next) {
    //console.log(req.file.originalname)
    //console.log(req.file.size)

    res.render('index.ejs', {
        filename: req.file.originalname,
        filesize: req.file.size, 
    });
    
    // Delete the file after getting the relevant information from it
    fs.unlink(req.file.path, (err) => {
      if (err) throw err;
      console.log('successfully deleted');
    });
});

module.exports = router;
