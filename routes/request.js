const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Add new member to the team
router.post(`/`, (req, res) => {
  console.log(`request to add member to team:\n${JSON.stringify(req.body)}`);
  const requestData = req.body;
  User.findById(requestData.requester)
    .then((user) => {
      user.requests.push(requestData);
      return user.save();
    })
    .then((user) => res.status(201).json({ user }))
    .catch(console.error);
});

// View all requests
router.get("/", (req, res) => {
  console.log(`Requesting all member requests`);
  Request.find()
    .populate("team")
    .populate("requester")
    .populate("recipient")
    .then((requests) => {
      requests.forEach((request) => {
        console.log(request.toJSON());
      });
      res.json({ requests });
    })
    .catch(console.error);
});

module.exports = router;
