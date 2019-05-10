const mongoose = require('mongoose');

const muralSchema = new mongoose.Schema({
	artwork_title: String,
	artist: String,
	image: String,
	art_description: String,
	year_installed: Number,
	affiliation: String,
	street_address: String,
	zipcode: Number,
	location_description: String,
	latitude: Number,
	longitude: Number
})

const Mural = mongoose.model('Mural', muralSchema);

module.exports = Mural;