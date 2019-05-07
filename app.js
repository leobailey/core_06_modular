//const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const demoRouter = express.Router();

demoRouter.route('/books')
    .get((req, res) =>{
        const response = { hello: 'this is my API' };
        res.json(response);
    });

app.use('/api', demoRouter);

app.get('/', (req, res)=>{
    res.send('Welcome to my API - just express at the moment with some nodemon !!');
});

app.listen(port,()=>{
    console.log("Server running at http://localhost:%d", port);
});

