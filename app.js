//const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.get('/', (req, res)=>{
    res.send('Welcome to my API - just express at the moment with some nodemon !!');
});

/* const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!!! - node version (but soon to be express!)");
}); */

app.listen(port,()=>{
    console.log("Server running at http://localhost:%d", port);
});