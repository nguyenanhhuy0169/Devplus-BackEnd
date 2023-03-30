const mongoose = require("mongoose");
const Be_DevplusSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    number: {
      type: Number,
    },
    description: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("be_devplus", Be_DevplusSchema);
