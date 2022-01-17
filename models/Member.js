const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    team: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    requester: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    recipient: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    status: {
        type: Number,
        codes: [
            0,   //'add friend'
            1,   //'requested'
            2,   //'pending'
            3    //'member of team'
        ]
    }
}, {
    timestamps: true
})

module.exports = memberSchema