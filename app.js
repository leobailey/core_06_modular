const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');


const demoRouter = express.Router();
const db = mongoose.connect('mongodb://coredbUser:c0r3dbuser@ds044787.mlab.com:44787/coredb?authSource=coredb')
const Book = require('./models/bookModel');

// This enables express to serve static content - makes the images, css and js file work for static html pages
app.use(express.static('./'))

// servers the html page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// servers the demorouter demo api endpoint
demoRouter.route('/Demo')
.get((req, res)=> {
    const response = {hello: 'This is my Demo API'};
    res.json(response);

});

// servers the demo router books api endpoint
demoRouter.route('/Books')
.get((req, res)=> {
    Book.find((err, books) => {
        if (err){
            return res.send(err);
        } 
        return res.json(books);
    });
});


// Basic implementation of the IPAddress Lookup - takes a static IP and sends it to the service and gets the details back
demoRouter.route('/iplookup')
.get((req, res)=> {
    var Request = require("request");
    Request.get("http://api.ipstack.com/193.23.120.234?access_key=6f2e653b548e543715e59299f35fc40d", (error, response, body) => {
        if(error) {
            res.send(error);
            return console.dir(error);
            
        }
        res.send(JSON.parse(body));
        return console.dir(JSON.parse(body));
    })
});

// servers the demo router book (look fo id) api endpoint
demoRouter.route('/Books/:bookId')
.get((req, res)=> {
    Book.findById(req.params.bookId, (err, book) => {
        if (err){
            return res.send(err);
        } 
        return res.json(book);
    });
});

// defines the entry point for the demoRouter Router    
app.use('/api', demoRouter);

app.listen(port,()=>{
    console.log("Server running at http://localhost:%d", port);
});

