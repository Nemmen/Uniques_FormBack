const Participant = require("../model/codeCrusade");

const addParticipant = async (req, res) => {
  try {
    const { email, fullname, admissionNumber, branch, contactNumber } =
      req.body;

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