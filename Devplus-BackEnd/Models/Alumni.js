const mongoose = require("mongoose");
const AlumniSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    avatar_student: {
      type: String,
    },
    name_student: {
      type: String,
    },
    role: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("alumni", AlumniSchema);
