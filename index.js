const express = require("express");
const connectDB = require("./database/config");
const cors = require("cors");


const app = express();

app.use(
  cors(
    (origin = "*") // allow to server to accept request from different origin
  )
);

app.use(express.json());


const PORT = 5000;

//connectingto mongo db
connectDB();

app.get("/", (req, res) => {
  res.send("hui");
});

app.use("/codeCrusade", require("./routes/codeCrusade"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

