const mongoose = require('mongoose');

const muralSchema = new mongoose.Schema({
	title: {
		type: String,
		default: ""
	},
	artist: {
		type: String,
		default: ""
	},
	image: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	},
	locationDescription: {
		type: String,
		default: ""
	},
	year: {
		type: Number,
		default: null
	},
	affiliation: {
		type: String,
		default: ""
	},
	address: {
		type: String,
		default: ""
	},
	zipcode: {
		type: Number,
		default: null
	},
	lat: {
		type: Number,
		default: null
	},
	lng: {
		type: Number,
		default: null
	}
})

const Mural = mongoose.model('Mural', muralSchema);

module.exports = Mural;