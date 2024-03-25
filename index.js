const express = require('express');
const bodyParser = require('body-parser');
const employee = require('./routes/routes.js'); // Imports routes for the products
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/employee', employee);
let port = 1234;
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/adminDepartment';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB).then(()=>console.log('connected'))
.catch(e=>console.log(e));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
console.log('connected to db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});