const mongoose = require('mongoose');

const muralSchema = new mongoose.Schema({
	title: String,
	artist: String,
	image: String,
	description: String,
	location_description: String,
	year: Number,
	affiliation: String,
	address: String,
	zipcode: Number,
	lat: Number,
	lng: Number
})

const Mural = mongoose.model('Mural', muralSchema);

module.exports = Mural;