const mongoose = require("mongoose");
const requestSchema = require('./Request')

const UserSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    requests: [requestSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
