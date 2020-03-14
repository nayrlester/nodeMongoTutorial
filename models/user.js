const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

	fName: {
	    type: String,
	    required: true
  	},
  	lName: {
	    type: String,
	    required: true
	},
	mName: {
	    type: String,
	    required: true
	},
	gender: {
	    type: Number,
	    required: true
	},
	createdDate: {
	    type: Date,
	    required: true,
	    default: Date.now
	}

})

module.exports = mongoose.model('User', userSchema)