const mongoose = require("mongoose");
const ConcernsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("concerns", ConcernsSchema);
