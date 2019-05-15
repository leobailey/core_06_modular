//const http = require('http');
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

/* demoRouter.route('/books')
    .get((req, res) =>{
        Book.find((err, books) => {
            if(err){
                return res.send(err);
            }
            return res.json(books);
        });
    }); */

// defines the entry point for the demoRouter Router    
app.use('/api', demoRouter);

// This has been deprecated by the html page served above
/* app.get('/', (req, res)=>{
    res.send('Welcome to my API - just express at the moment with some nodemon !!');
}); */

app.listen(port,()=>{
    console.log("Server running at http://localhost:%d", port);
});

