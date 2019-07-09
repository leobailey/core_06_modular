const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = require('express')();
const port = process.env.PORT || 4000;
const path = require('path');


const demoRouter = express.Router();
const db = mongoose.connect('mongodb://coredbUser:c0r3dbuser@ds044787.mlab.com:44787/coredb?authSource=coredb')
const Book = require('./models/bookModel');
const IPLookUp = require('./models/IPLookupModel');


//basic scheduled job inmplementation 
//var schedule = require('node-schedule');
//var j = schedule.scheduleJob('42 * * * * *', function(){
//  console.log('The answer to life, the universe, and everything!');
//});


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


// Basic implementation of the MSSQL access
demoRouter.route('/coreData')
.get((req, res)=> {

    var sql = require("mssql");

    // config for your database
    var config = {
        //user: 'sa',
        //password: 'mypassword',
        //server: 'localhost', 
        //database: 'SchoolDB' 
	    user: 'systemsplanning-core-dev-sql-server-admin',
        password: 'C0r3_D3v_Adm1n',
        server: 'systemsplanning-core-dev-sql-server.database.windows.net', 
        database: 'SystemsPlanning_CORE_DEV_SQL_DB',
	// Extra bit recommended if using Azure
    	options: {
            encrypt: true // Use this if you're on Windows Azure
    	}
    };

    //crude clear out of any exisitng connections
    sql.close();

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from DimGeo', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
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

