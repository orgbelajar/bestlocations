// Call package mongoose then use schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Make var Schema
const placeSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String,
    image: String
});

// Export schema then make as model
module.exports = mongoose.model('Place', placeSchema); // 'Place' is name of model (usually use UpperCase)