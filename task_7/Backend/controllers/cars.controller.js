const Car = require('../models/carModel.js');

// FIND ALL THE CAR DOCUMENTS
exports.findAll = function(req, res) {
    Car.find( function(err, cars) {
        if(err) {
            console.log(err);
            res.status(500).send({message: 'Some error ocured while retrieving the cars'});
        }
        else{
            res.send(cars);
        }
    })
}

// CREATE AND SAVE A NEW CAR DOCUMENT
exports.create = function(req, res) {
    // create a new car model document
    let carModel = new Car (
        {model: 'GET INFORMATION FROM FRONT END'},
        {make: 'GET INFORMATION FROM FRONT END'},
        {colour: 'GET INFORMATION FROM FRONT END'},
        {registration: 'GET INFORMATION FROM FRONT END'},
        {owner: 'GET INFORMATION FROM FRONT END'},
        {address: 'GET INFORMATION FROM FRONT END'}
    );

    // save the document
    carModel.save( function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: 'Some error occured while creating the car document'});
        }
        else {
            console.log(data);
            res.send('The car has been added to the database');
        }
    })
}