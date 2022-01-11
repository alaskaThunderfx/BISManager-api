const express = require("express");
const router = express.Router();
const GearSet = require("../models/GearSet");

router.get("/", async (req, res) => {
  try {
    const gearsets = await GearSet.find();
    res.json(gearsets);
    console.log(gearsets);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("requesting specific gearsets");
    const gearset = await GearSet.findById(req.params.id);
    console.log(gearset);
    const thingy = res.json(gearset);
    // console.log(thingy)
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const gearset = new GearSet({
    user: req.body.user,
    job: req.body.job,
    weapon: req.body.weapon,
    head: req.body.head,
    body: req.body.body,
    hands: req.body.hands,
    legs: req.body.legs,
    feet: req.body.feet,
    ears: req.body.ears,
    neck: req.body.neck,
    wrists: req.body.wrists,
    ring0: req.body.ring0,
    ring1: req.body.ring1,
  });
  try {
    const savedGearSet = await gearset.save();
    res.json(savedGearSet);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res, next) => {
  console.log("req.body = ", req.body);
  GearSet.findById(req.params.id)
    .then((gearset) => {
      console.log(`This is the variable gearset: ${gearset}`);
      return gearset.updateOne(req.body);
    })
    .then(() => res.sendStatus(204))
    .then(console.log(res))
    .catch(console.error());
});

module.exports = router;
