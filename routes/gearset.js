const express = require("express");
const router = express.Router();
const User = require(`./../models/User`)

// router.get("/", async (req, res) => {
//   try {
//     const gearsets = await GearSet.find();
//     res.json(gearsets);
//     console.log(gearsets);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     console.log("requesting specific gearsets");
//     const gearset = await GearSet.findById(req.params.id);
//     console.log(gearset);
//     const thingy = res.json(gearset);
//     // console.log(thingy)
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// Create a new set
router.post("/", async (req, res) => {
  const gearSetData = req.body
  const userId = gearSetData.userId
  User.findById(userId)
    .then(user => {
      user.gearSets.push(gearSetData)
      return user.save()
    })
    .then(user => res.status(201).json({ user }))
    .catch(console.error)
});

// Update a set
router.patch("/:id", async (req, res) => {
  const gearSetId = req.params.id
  const userId = req.body.userId
  const gearSetData = req.body
  User.findById(userId)
    .then(user => {
      const gearSet = user.gearSets.id(gearSetId)
      gearSet.set(gearSetData)
      return user.save()
    })
    .then(() => res.sendStatus(204))
    .catch(console.error)
});

// Delete a set
router.delete(`/:id`, (req, res) => {
  const gearSetId = req.params.id
  const userId = req.body.userId
  User.findById(userId)
    .then(user => {
      user.gearSets.id(gearSetId).remove()
      return user.save()
    })
    .then(() => res.sendStatus(204))
    .catch(console.error)
})

module.exports = router;
