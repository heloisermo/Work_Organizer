const express = require('express');
const app = express();
const db = require('./db.js');
const userRoutes = require('./users.routes.js');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
