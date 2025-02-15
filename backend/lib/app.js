const express = require('express');
const cors = require('cors');    

const app = express();
app.use(cors()); 
app.use(express.json());
app.use('/api/v1/users', require('./controllers/users'));

module.exports = app;
