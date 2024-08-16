const Participant = require("../model/codeCrusade");

const addParticipant = async (req, res) => {
  try {
    const { email, fullname, admissionNumber, branch, contactNumber } = req.body;

    // Use await and findOne to check if the participant already exists
    const existingParticipant = await Participant.findOne({ email });

    if (existingParticipant) {
      res.status(400).send("Already registered!");
      console.log("User registered already");
      return; // Return to prevent adding a new participant
    }

    // Create and save the new participant
    const participant = new Participant({
      email,
      fullname,
      admissionNumber,
      branch,
      contactNumber,
    });

    await participant.save();
    res.send("Participant Added Successfully");
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
};

module.exports = addParticipant;
