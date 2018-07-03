const express = require("express");
const router = express.Router();


//Load User model
const Player = require("../../models/Player");

//@route  GET api/players/test
//@desc   Tests players route
//@access Public
router.get("/test", (req, res, next) => res.json({ msg: "Players Works." }));

//@route  GET api/players/register
//@desc   Register player
//@access Public
router.post("/register", (req, res, next) => {
  Player
    .find({
       name: req.body.name 
    })
    .exec()
    .then(player => {
      if (player.length > 0) {
        return res.status(400).json({ name: "Name already exists" });
      } else {
        const newPlayer = new Player({
          name: req.body.name,
          country: req.body.country 
        });
      
        newPlayer
          .save()
          .then(result => {
            res.status(201).json(result);
          })
          .catch(err => {

            console.log(err)
            res.status(404).json({
              error: err
            });
          });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;
