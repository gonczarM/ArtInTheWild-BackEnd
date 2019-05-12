const express = require('express')
const router = express.Router();
const Mural = require('../models/mural')

router.post('/', async (req, res, next) => {
	try{
		const createdMural = await Mural.create(req.body)
		res.json({
      status: 200,
      data: createdMural
    });
  } 
	catch(error){
	res.status(400).json({
      status: 400,
      error: error
    })
  }	
})

router.get('/home', async (req, res, next) => {
	try{
		const allMurals = await Mural.find()
		res.json({
			status: 200,
			data: allMurals
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: error
		})
	}
})

router.get('/mural/:id', async (req, res, next) => {
	try{
		const foundMural = await Mural.findById(req.params.id)
		res.json({
			status: 200,
			data: foundMural
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: error
		})
	}	
})

router.put('/mural/:id', async (req, res, next) => {
	try{
		const updatedMural = await Mural.findByIdAndUpdate(req.params.id, req.body, {new: true});
		res.json({
			status: 200,
			data: updatedMural
		})
	}
	catch(error){
	res.status(400).json({
      status: 400,
      error: error
    })
  }			
})

router.delete('/mural/:id', async (req, res, next) => {
	try{
		const deletedMural = await Mural.findByIdAndDelete(req.params.id)
		res.json({
			status: 200,
			data: deletedMural
		})
	}
	catch(error){
		res.status(400).json({
			status: 400,
			error: error
		})
	}		
})

module.exports = router;