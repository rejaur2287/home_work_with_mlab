const express = require("express");
const router = express.Router();


//Load User model
const Player = require("../../models/Player");

//@route  GET api/players/test
//@desc   Tests players route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Players Works." }));

//@route  GET api/players/register
//@desc   Register player
//@access Public
router.post("/register", (req, res) => {
  Player.findOne({ name: req.body.name }).then(player => {
    if (player) {
      return res.status(400).json({ name: "Name already exists" });
    } else {
      const newPlayer = new Player({
        name: req.body.name,
        country: req.body.country 
      });
    }
  });
});

module.exports = router;
