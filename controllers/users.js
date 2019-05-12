const express = require('express')
const router = express.Router();
const superagent = require('superagent')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.post('/', async (req, res, next) => {
	const password = req.body.password
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
	const userDbEntry = {}
	userDbEntry.username = req.body.username
	userDbEntry.password - passwordHash
	try{
		const foundUsername = await User.findOne({'username': req.body.username})
		if(foundUsername){
			res.json({
				status: 201,
				data: foundUsername
			})
		}
		else{
			const createdUser = await User.create(userDbEntry)
			req.session.loggedIn = true
			req.session.UserId = createdUser._id
			req.session.username = req.body.username
			res.json({
				status: 200
				user: userDbEntry
				session: req.session
			})
		}
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: error
		})
	}
})

router.get('/user/:id', async (req, res, next) => {
		
})


// GET (/user/:id) -- show page for user displays murals a/o images uploaded by user
// GET (/user/logout) -- logs user out, kills session
// POST (/user/register) -- creates user, starts session
// POST (/user/login) -- login user, start sesssion
// DELETE (/user/:id) -- delete specific user and associated posts

module.exports = router;