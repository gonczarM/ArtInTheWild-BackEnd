const express = require('express')
const router = express.Router();
const Mural = require('../models/mural')
const User = require('../models/user')
const superagent = require('superagent')

router.post('/', async (req, res, next) => {
	try{
		const foundUser = await User.findById(req.session.userId)
		const createdMural = await Mural.create(req.body)
		console.log(req.body);
		foundUser.murals.push(createdMural)
		foundUser.save()
		res.json({
      status: 200,
      mural: createdMural,
      user: foundUser
    });
  } 
	catch(error){
	res.status(400).json({
      status: 400,
      error: next(error)
    })
  }	
})

//route to add third party api into my db
// router.post('/', async (req, res, next) => {
// 	try{
// 		const foundMurals = await superagent
// 		.get(`https://data.cityofchicago.org/resource/we8h-apcf.json`)
// 		const arrOfMurals = await JSON.parse(foundMurals.text)
// 		const filteredArr = arrOfMurals.map(mural => {
// 			return {
// 				title: mural.artwork_title,
// 		    artist: mural.artist_credit,
// 		    description: mural.description_of_artwork,
// 		    locationDescription: mural.location_description,
// 		    year: mural.year_installed,
// 		    affiliation: mural.affiliated_or_commissioning, 
// 		    address: mural.street_address,
// 		    lat: mural.latitude,
// 		    lng: mural.longitude,
// 		    zipcode: mural.zip
// 			}
// 		})
// 		const createdMurals = await Mural.create(filteredArr)
// 		res.status(200).json({ 
//       		status: 200,
//       		murals: createdMurals
//     	});
// 	}
// 	catch(error){
// 		res.status(400).json({
//       		status: 400,
//       		error: next(error)
//     	})
// 	}		
// })

router.get('/home', async (req, res, next) => {
	try{
		const allMurals = await Mural.find()
		res.json({
			status: 200,
			murals: allMurals
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: next(error)
		})
	}
})

router.get('/mural/:id', async (req, res, next) => {
	try{
		const foundUser = await User.findOne({'murals': req.params.id})
		.populate({path: 'murals', match: {_id: req.params.id}})
		const foundMural = await Mural.findById(req.params.id)
		console.log(foundMural.ima);
		res.json({
			status: 200,
			mural: foundMural,
			user: foundUser
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: next(error)
		})
	}	
})

router.put('/mural/:id', async (req, res, next) => {
	try{
		const updatedMural = await Mural.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.json({
			status: 200,
			mural: updatedMural
		})
	}
	catch(error){
	res.status(400).json({
      status: 400,
      error: next(error)
    })
  }			
})

router.delete('/mural/:id', async (req, res, next) => {
	try{
		const deletedMural = await Mural.findByIdAndDelete(req.params.id)
		res.json({
			status: 200,
			mural: deletedMural
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: next(error)
		})
	}		
})

module.exports = router;