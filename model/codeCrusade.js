const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  admissionNumber: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  language: {
    type: String,
	required:true,
    enum: ['English', 'Hindi'], // Restricting to specific values
  },
  laptop: {
    type: String,
	required:true,
    enum: ['Yes', 'No'], // Restricting to specific values
  },
});

module.exports = mongoose.model('Code_Crudase_3.0_Participant', participantSchema);
