File Metadata Microservice
==========================

A FreeCodeCamp assignment.

## Objective

Build a full stack JavaScript app that is functionally [similar to this]( https://aryanj-file-size.herokuapp.com/) and deploy it to Heroku.


Here are the specific user stories you should implement for this project:

**User Story**: I can submit a FormData object that includes a file upload.

**User Story**: When I submit something, I will receive the file size in bytes within the JSON response

Hint: You may want to use this package: https://www.npmjs.com/package/multer



## Usage:

Select a file and click Submit. The file will be uploaded and the file size is returned via an alert pop up. The file is deleted from the server once the file size has been returned.



## Notable learning/features

Used Multer as advised by FCC. This is used to enable multipart forms and uploading of files. You specify a destination dir for the file/s to be uploaded to, and the file and it's attributes is/are then available via req.file, the form fields via req.body

For the Multer uploads there must be an upload dir created in advance.

To delete a file you need to require 'fs' and then use fs.unlink to delete the file. 

Don't forget to add a 'name' field to the form field/s you want to be able to access on the server end. In this case I named it 'file' and then the POST route accesses the file with the same name ('file') in the upload.single('file')... section.

An alert popup takes a string... don't try to give it something else!

Used Postman to test the post route.

Used the express generator to build the file structure and starter js files.

Deployed to Heroku

Used nodemon in the npm script to run the app for development. Need to change this back to node for prod deployment.

Use the 'use strict' at the top of your js files. This will prevent errors why attempting to use ES6 in the code

Express Router: 
    
    when using Express generator to generate starter code, it uses app.js to list the 'core'? routes, with a combo of a require...
        var api = require('./routes/api');      // and a corresponding api.js file in the routes dir
        and
        app.use('/api', api)  // where anything starting /api is sent to the api file
        
        Then in the api file it starts with a root route of / which actually means /api/anything


Used ejs templating to render templates: Used the 'app.locals' object in app.js to set the local vars for title and desc. This means that 'title' and 'desc' are directly accessible from templates without needing to inject with the res.render function. this mean that when you re-render the index.ejs template you don't have to reinject the title var every time. Notice in fileupload.js when res.render is called, the title and desc for the page heading is not injected.

For css, with node, this goes in the designated 'public' dir (see app.js) with a link tag in the ejs template linking to it.

## Notes for next time

Use the express generator, I like how the www.js and app.js launch the main app. I like how app.js has the main top level routes, and the routes files have the 'sub-routes?'. Put each of these routes files in it's own 'feature' dir, rather than a routes dir.

Not sure why the /bin/www file and dir naming? Historical reasons? Read up on this.

Create a 'feature' or 'module' dir for each feature... or maybe even each route. Store the code for each route in it's own file in the feature dir, link to the file in the route.js file to keep things modular/tidy like this: 

    router.get( '/api/imagesearch/:SEARCH', controller.insertQuery )
    
insertQuery is a function in controller.js. Will need to export the controller.js function/s.


## Dev

for debugging in dev:

    $ DEBUG=express:* npm start