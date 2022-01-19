const express = require("express");
const router = express.Router();
const Team = require(`./../models/Team`);

// create new team
router.post(`/`, (req, res) => {
  console.log(`Incoming team creation request: \n${req.body}`);
  const team = req.body;
  Team.create(team)
    .then((team) => {
      res.status(201).json(team);
    })
    .catch(console.error);
});

// list all teams
router.get(`/`, (req, res) => {
  console.log(`Receiving a get request`);
  Team.find()
    .populate("creator")
    .then((teams) => {
      teams.forEach((team) => {
        console.log(team.toJSON());
      });
      res.json({ teams });
    })
    .catch(console.error);
});

// show specific team
router.get(`/:id`, (req, res) => {
  console.log(`Receiving a get request`);
  Team.findById(req.params.id)
    .populate("creator")
    .then((team) => res.json({ team }))
    .catch(console.error);
});

module.exports = router;
