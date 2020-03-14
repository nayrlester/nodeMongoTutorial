const _ = require('lodash');
const User = require('../models/user')

exports.user = async function (req, res){
	try {
	
	    const users = await User.find()
		res.json(users)

	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

exports.getUser = async function (req, res){
	try {
	    user = await User.findById(req.params.id)
	    if (user == null) {
	      	return res.status(404).json({ message: 'Cant find User'})
	    }else{
			res.json(user)
	    }
	} catch(err){
	    return res.status(500).json({ message: err.message })
	}
}

exports.createUser = async function (req, res){
	const user = new User({
	    fName: req.body.fName,
	    lName: req.body.lName,
	    mName: req.body.mName,
	    gender: req.body.gender
  	})

	try {
	    const newUser = await user.save()
	    res.status(201).json(newUser)
	} catch (err) {
	    res.status(400).json({ message: err.message })
	}
}
	
exports.deleteUser = async function (req, res){
	try {
		let id = req.params.id
		await  User.deleteOne({_id:id}).exec();
	    res.json({ message: 'Deleted This User' })
	} catch(err) {
	    res.status(500).json({ message: err.message })
	}
}

exports.updateUser = async function (req, res){
	try {

		const  id = req.params.id,
		       body = req.body;
		  
		User.findOneAndUpdate(id, body, function(error, user) {
		    if(error) return next(error);
		    
		    if(!user) {
		      return res.status(404).json({
		        message: 'USer with id ' + id + ' can not be found.'
		      });
		    }

		    res.json(user);
		});
    
	} catch(err) {
	    res.status(400).json({ message: err.message })
	}
}