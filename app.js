//const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');

const demoRouter = express.Router();
const db = mongoose.connect('mongodb://coredbUser:c0r3dbuser@ds044787.mlab.com:44787/coredb?authSource=coredb')
// const Book = require('./models/bookModel');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

demoRouter.route('/Demo')
.get((req, res)=> {
    const response = {hello: 'This is my DEMO API'};
    res.json(response);
});

demoRouter.route('/Books')
.get((req, res)=> {
    const response = {hello: 'This is my Books API'};
    res.json(response);
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

app.use('/api', demoRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to my API - just express at the moment with some nodemon !!');
});

app.listen(port,()=>{
    console.log("Server running at http://localhost:%d", port);
});

