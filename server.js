const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

const players = require("./routes/api/players");


const app = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/key").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/players", players);



const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));