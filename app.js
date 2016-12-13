'use strict'
let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')

let index = require('./routes/index')
let fileUpload = require('./routes/fileupload')

let app = express()

// added this so that the template index.ejs has direct access to the page title and desc vars. When the page is re-rendered by fileupload.js you don't then have to pass in these vars. This is how the Express docs advise to use this.
app.locals = {
    desc: 'FCC assignment',
    theTitle: 'File Metadata Microservice'
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/file-upload', fileUpload)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
