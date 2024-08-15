const express = require("express");
const router = express.Router();
const  addParticipant = require("../controllers/codeCrudsade");	// Importing the addParticipant function from the codeCrusade controller

router.post("/addParticipant", addParticipant)

module.exports = router;