const mongoose = require("mongoose");

const gearSetSchema = new mongoose.Schema({
  job: {
    type: String,
    required: true
  },
  weapon: {
    name: {
      type: String,
    },
    doesHave: {
      type: Boolean,
      default: false,
    }
  },
  head: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  body: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  hands: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  legs: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  feet: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  ears: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  neck: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  wrists: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  ring0: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  },
  ring1: {
    name: {
      type: String,
      required: true,
    },
    doesHave: {
      type: Boolean,
      default: false,
    },
  }
}, {
  timestamps: true
});

module.exports = gearSetSchema