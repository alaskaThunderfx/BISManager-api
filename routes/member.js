const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// Add new member to the team
router.post(`/`, (req, res) => {
    console.log(`request to add member to team:\n${JSON.stringify(req.body)}`)
    const memberData = req.body
    const teamId = memberData.team
    Team.findById(teamId).populate('members.requester').populate(`members.recipient`)
        .then(team => {
            team.members.push(memberData)
            return team.save()
        })
        .then(team => res.status(201).json({ team }))
        .catch(console.error)
})

module.exports = router