// SERVER

// Requirements
const express = require('express');
const helmet = require("helmet");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

// initialize express
const app = express();

app.use(helmet());

// connect to mongoDB
const uri = 'mongodb+srv://Renaldo:Password@hyperion-task.cwxa2.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, {
    dbname: 'task'
});

// error
mongoose.connection.on('error', function() {
    console.log('Could not conect to the database. Exiting now...');
    process.exit();
});

// success
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(express.json());
//app.use(cors);
app.use(morgan('dev'));

// Using routes
app.use('/', routes);

// LIstening on Port
const PORT = 8080;
app.listen(PORT, () => console.log("Listening on port:", PORT));

module.exports = app;