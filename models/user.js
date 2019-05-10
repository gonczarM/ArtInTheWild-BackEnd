const mongoose = require('mongoose');
const Mural = require('./mural')

const UserSchema = new mongoose.Schema({
	username: String,
	passwrod: String,
	murals:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Mural'
	}]
})

const User = mongoose.model('User', userSchema);

module.exports = User;