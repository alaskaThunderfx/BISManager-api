const mongoose = require("mongoose");
const requestSchema = require("./Request");

const UserSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    requests: [requestSchema],
    createdTeams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    joinedTeams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
