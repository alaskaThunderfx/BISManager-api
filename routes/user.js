const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("requests");
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  User.findById(req.params.id)
    .populate(`requests.team`)
    .populate(`requests.requester`)
    .populate(`requests.recipient`)
    .then((user) => res.json({ user }))
    .catch(console.error);
});

router.post("/", async (req, res) => {
  console.log("user creation request coming in");
  console.log(req.body);
  const user = new User({
    user: req.body.user,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", (req, res) => {
  console.log(`updating user requests`);
  console.log(req.body);
  User.findById(req.params.id)
    .then((user) => user.updateOne(req.body))
    .then(() => res.sendStatus(204))
    .catch(console.error);
});

module.exports = router;
