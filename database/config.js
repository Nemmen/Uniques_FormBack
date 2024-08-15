const mongoose = require("mongoose");
require("dotenv").config();



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};


module.exports  = connectDB;
