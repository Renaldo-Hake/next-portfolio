const mongoose = require('mongoose');

// declaring the car schema of what data we will get form the database. 
let CarSchema = mongoose.Schema({
    model:{
        type: Number,
        required: true
    },
    make:{
        type: String,
        required: true
    },
    colour:{
        type: String,
        required: true
    },
    registration:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
});

// creating model
const Car = mongoose.model('Test', CarSchema);

// exporting the model
module.exports = Car;