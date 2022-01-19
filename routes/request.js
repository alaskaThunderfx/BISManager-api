const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Invite new member to the team
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

// Update request
router.patch('/:id', (req, res) => {
    const requestId = req.params.id
    const userId = req.body.userId
    const statusUpdate = req.body.request
    User.findById(userId)
        .then(user => {
            const  request = user.requests.id(requestId)
            request.set(statusUpdate)
            return user.save()
        })
        .then(() => res.sendStatus(204))
        .catch(console.error)
})

module.exports = router;
