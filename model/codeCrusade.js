const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
	email : {
		type : String,
		required : true
	},
	fullname :{
		type : String,
		required : true
	},
	admissionNumber : {
		type : String,
		required : true
	},
	branch : {
		type : String,
		required : true
	},
	contactNumber : {
		type : String,
		required : true
	}
})


module.exports = mongoose.model('Code_Crudase_3.0_Participant', participantSchema);