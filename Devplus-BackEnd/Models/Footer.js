const mongoose = require("mongoose");
const FooterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: [
      {
        type: String,
      },
      {
        type: String,
      },
      {
        type: String,
      },
    ],

    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("footer", FooterSchema);
