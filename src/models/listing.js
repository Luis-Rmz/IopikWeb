var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    title: String,
    category: String,
    description: String,
    tags: String,
    address: String,
    region: String,
    phone: Number,
    email: String,
});

module.exports = mongoose.model('listing', listingSchema);