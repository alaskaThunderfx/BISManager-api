const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('User', UserSchema)